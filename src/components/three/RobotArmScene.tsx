import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox, MeshReflectorMaterial, Environment, Lightformer, ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * RobotArmScene - a stylised-realistic 6-axis industrial arm performing a
 * continuous pick-and-place loop (reach → grip → lift → swing → place).
 *
 * Realism without external model files (CSP-safe):
 *   • RoundedBox beveled links + PBR metal
 *   • image-based lighting built in-scene from <Lightformer>s (no HDR fetch)
 *   • a reflective studio floor (MeshReflectorMaterial)
 *   • soft contact shadows
 */

const CYCLE = 7.5; // seconds per pick-and-place loop

const BODY = "#1b2333";
const SHELL = "#aab4c6";
const JOINT = "#0c1120";
const ACCENT = "#3aa0ff";
const ACCENT2 = "#34e0a1";

// keyframes: f = fraction of cycle, joint angles + grip (0 closed .. 1 open)
type Pose = { y: number; s: number; e: number; w: number; g: number };
const KEYS: ({ f: number } & Pose)[] = [
  { f: 0.0, y: -0.7, s: -0.15, e: 0.95, w: 0.35, g: 1 },
  { f: 0.16, y: -0.7, s: 0.46, e: 0.5, w: 0.55, g: 1 },
  { f: 0.26, y: -0.7, s: 0.58, e: 0.42, w: 0.58, g: 1 },
  { f: 0.32, y: -0.7, s: 0.58, e: 0.42, w: 0.58, g: 0.12 },
  { f: 0.48, y: -0.7, s: -0.05, e: 0.95, w: 0.3, g: 0.12 },
  { f: 0.6, y: 0.7, s: 0.0, e: 0.9, w: 0.35, g: 0.12 },
  { f: 0.7, y: 0.7, s: 0.58, e: 0.42, w: 0.58, g: 0.12 },
  { f: 0.76, y: 0.7, s: 0.58, e: 0.42, w: 0.58, g: 1 },
  { f: 0.86, y: 0.7, s: -0.05, e: 0.95, w: 0.3, g: 1 },
  { f: 1.0, y: -0.7, s: -0.15, e: 0.95, w: 0.35, g: 1 },
];

const smooth = (t: number) => t * t * (3 - 2 * t);

function samplePose(f: number): Pose {
  let a = KEYS[0];
  let b = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) {
    if (f >= KEYS[i].f && f <= KEYS[i + 1].f) {
      a = KEYS[i];
      b = KEYS[i + 1];
      break;
    }
  }
  const span = b.f - a.f || 1;
  const k = smooth((f - a.f) / span);
  const lp = (x: number, y: number) => x + (y - x) * k;
  return { y: lp(a.y, b.y), s: lp(a.s, b.s), e: lp(a.e, b.e), w: lp(a.w, b.w), g: lp(a.g, b.g) };
}

function metal(color: string, opts: Partial<{ metalness: number; roughness: number }> = {}) {
  return (
    <meshStandardMaterial
      color={color}
      metalness={opts.metalness ?? 0.92}
      roughness={opts.roughness ?? 0.28}
      envMapIntensity={0.9}
    />
  );
}

function Ring({ color }: { color: string }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.32, 0.055, 20, 56]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.4} toneMapped={false} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

function Pad({ position, color, pulseRef }: { position: [number, number, number]; color: string; pulseRef: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    if (ref.current) ref.current.emissiveIntensity = 0.6 + pulseRef.current * 2.6;
  });
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.26, 0.34, 48]} />
      <meshStandardMaterial ref={ref} color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Arm() {
  const rig = useRef<THREE.Group>(null);
  const shoulder = useRef<THREE.Group>(null);
  const elbow = useRef<THREE.Group>(null);
  const wrist = useRef<THREE.Group>(null);
  const fingerL = useRef<THREE.Group>(null);
  const fingerR = useRef<THREE.Group>(null);
  const cube = useRef<THREE.Mesh>(null);
  const leftPulse = useRef(0);
  const rightPulse = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const f = (t % CYCLE) / CYCLE;
    const p = samplePose(f);

    if (rig.current) {
      rig.current.rotation.y = p.y;
      rig.current.position.y = -1.35 + Math.sin(t * 1.2) * 0.015;
    }
    if (shoulder.current) shoulder.current.rotation.z = p.s;
    if (elbow.current) elbow.current.rotation.z = p.e;
    if (wrist.current) wrist.current.rotation.z = p.w;

    const open = 0.06 + p.g * 0.07;
    if (fingerL.current) fingerL.current.position.x = -open;
    if (fingerR.current) fingerR.current.position.x = open;
    if (cube.current) {
      // held cube visible only while gripping
      const held = p.g < 0.5;
      cube.current.visible = held;
      cube.current.scale.setScalar(held ? 1 : 0.001);
    }

    // pulse the pad the gripper is hovering over
    leftPulse.current = THREE.MathUtils.lerp(leftPulse.current, f > 0.2 && f < 0.34 ? 1 : 0, 0.15);
    rightPulse.current = THREE.MathUtils.lerp(rightPulse.current, f > 0.68 && f < 0.8 ? 1 : 0, 0.15);

    // gentle camera parallax
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 3.6 + state.pointer.x * 0.6, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.4 - state.pointer.y * 0.4, 0.03);
    state.camera.lookAt(0, 0.1, 0);
  });

  return (
    <>
      {/* floor pads (context for pick / place) */}
      <Pad position={[-1.25, -1.33, 0.55]} color={ACCENT2} pulseRef={leftPulse} />
      <Pad position={[1.25, -1.33, 0.55]} color={ACCENT} pulseRef={rightPulse} />

      <group ref={rig}>
        {/* base */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.62, 0.72, 0.24, 56]} />
          {metal(JOINT, { roughness: 0.5 })}
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.46, 0.5, 0.08, 56]} />
          {metal(SHELL, { roughness: 0.35 })}
        </mesh>
        <mesh position={[0, 0.42, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.36, 0.5, 40]} />
          {metal(BODY)}
        </mesh>

        {/* shoulder */}
        <group ref={shoulder} position={[0, 0.72, 0]}>
          <Ring color={ACCENT} />
          <RoundedBox args={[0.42, 1.55, 0.42]} radius={0.1} smoothness={4} position={[0, 0.78, 0]} castShadow>
            {metal(BODY)}
          </RoundedBox>
          {/* shell stripe */}
          <RoundedBox args={[0.2, 1.25, 0.04]} radius={0.02} smoothness={3} position={[0, 0.78, 0.215]}>
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.5} metalness={0.4} roughness={0.4} toneMapped={false} />
          </RoundedBox>

          {/* elbow */}
          <group ref={elbow} position={[0, 1.55, 0]}>
            <Ring color={ACCENT} />
            <RoundedBox args={[0.34, 1.3, 0.34]} radius={0.09} smoothness={4} position={[0, 0.64, 0]} castShadow>
              {metal(SHELL, { metalness: 0.85, roughness: 0.32 })}
            </RoundedBox>

            {/* wrist */}
            <group ref={wrist} position={[0, 1.28, 0]}>
              <mesh castShadow>
                <sphereGeometry args={[0.22, 28, 28]} />
                {metal(JOINT, { roughness: 0.45 })}
              </mesh>
              <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.2, 0.035, 14, 40]} />
                <meshStandardMaterial color={ACCENT2} emissive={ACCENT2} emissiveIntensity={2.6} toneMapped={false} />
              </mesh>

              {/* gripper hub */}
              <RoundedBox args={[0.3, 0.18, 0.3]} radius={0.04} smoothness={3} position={[0, 0.28, 0]} castShadow>
                {metal(BODY)}
              </RoundedBox>

              {/* fingers */}
              <group ref={fingerL} position={[-0.1, 0.46, 0]}>
                <RoundedBox args={[0.06, 0.3, 0.18]} radius={0.02} smoothness={3} castShadow>
                  {metal(SHELL, { roughness: 0.35 })}
                </RoundedBox>
              </group>
              <group ref={fingerR} position={[0.1, 0.46, 0]}>
                <RoundedBox args={[0.06, 0.3, 0.18]} radius={0.02} smoothness={3} castShadow>
                  {metal(SHELL, { roughness: 0.35 })}
                </RoundedBox>
              </group>

              {/* the carried workpiece */}
              <mesh ref={cube} position={[0, 0.52, 0]} castShadow>
                <boxGeometry args={[0.16, 0.16, 0.16]} />
                <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.6} metalness={0.2} roughness={0.3} toneMapped={false} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

export default function RobotArmScene(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [3.6, 1.4, 4.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <hemisphereLight args={["#9ec5ff", "#05060c", 0.5]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.4} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-4, 2, -3]} intensity={40} color={ACCENT} />
        <pointLight position={[3, -1, 3]} intensity={20} color="#8b5cf6" />

        <Arm />

        {/* reflective studio floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.36, 0]}>
          <planeGeometry args={[24, 24]} />
          <MeshReflectorMaterial
            resolution={512}
            mirror={0.55}
            blur={[400, 120]}
            mixBlur={6}
            mixStrength={1.4}
            roughness={0.85}
            depthScale={1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.2}
            color="#05070e"
            metalness={0.6}
          />
        </mesh>

        <ContactShadows position={[0, -1.34, 0]} opacity={0.5} scale={10} blur={2.6} far={4} color="#000814" />

        {/* in-scene image-based lighting (no external HDR → CSP safe) */}
        <Environment resolution={256}>
          <Lightformer intensity={2.2} position={[0, 5, -6]} scale={[12, 6, 1]} color="#cfe3ff" />
          <Lightformer intensity={1.6} position={[-6, 2, 1]} scale={[5, 6, 1]} color="#3aa0ff" />
          <Lightformer intensity={1.2} position={[6, 1, 2]} scale={[5, 6, 1]} color="#8b5cf6" />
          <Lightformer intensity={1} position={[0, -3, 2]} scale={[10, 3, 1]} color="#34e0a1" />
        </Environment>
      </Canvas>
    </div>
  );
}
