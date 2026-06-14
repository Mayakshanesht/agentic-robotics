import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox, MeshReflectorMaterial, Environment, Lightformer, ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * HumanoidScene — a stylised humanoid robot with a lifelike idle:
 * breathing, weight-shift, head look-around and a periodic friendly wave.
 * Realistic look without external model files (CSP-safe): PBR shells,
 * in-scene image-based lighting and a reflective floor.
 */

const SHELL = "#e6ecf6"; // white robot shell
const SHELL2 = "#b9c4d6";
const DARK = "#0d1320";
const ACCENT = "#3aa0ff";

function shell(color = SHELL, rough = 0.4) {
  return <meshStandardMaterial color={color} metalness={0.55} roughness={rough} envMapIntensity={0.9} />;
}
function dark(rough = 0.5) {
  return <meshStandardMaterial color={DARK} metalness={0.8} roughness={rough} envMapIntensity={0.8} />;
}

function Capsule({ r, len, color = SHELL }: { r: number; len: number; color?: string }) {
  return (
    <mesh castShadow>
      <capsuleGeometry args={[r, len, 8, 20]} />
      {shell(color, 0.42)}
    </mesh>
  );
}

function Body() {
  const root = useRef<THREE.Group>(null);
  const hips = useRef<THREE.Group>(null);
  const chest = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const shoulderL = useRef<THREE.Group>(null);
  const shoulderR = useRef<THREE.Group>(null);
  const forearmR = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (hips.current) {
      hips.current.position.x = Math.sin(t * 0.5) * 0.04;
      hips.current.rotation.z = Math.sin(t * 0.5) * 0.02;
      hips.current.position.y = Math.sin(t * 1.0) * 0.012;
    }
    if (chest.current) {
      const b = 1 + Math.sin(t * 1.6) * 0.012;
      chest.current.scale.set(1, b, 1);
      chest.current.rotation.y = Math.sin(t * 0.4) * 0.05;
    }
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.35) * 0.35;
      head.current.rotation.x = Math.sin(t * 0.5) * 0.05;
    }
    if (shoulderL.current) {
      shoulderL.current.rotation.z = 0.12;
      shoulderL.current.rotation.x = Math.sin(t * 0.8) * 0.06;
    }

    // periodic wave with the right arm
    const w = t % 9;
    const env = w < 2.4 ? Math.sin((w / 2.4) * Math.PI) : 0; // 0→1→0 envelope
    if (shoulderR.current) {
      shoulderR.current.rotation.z = THREE.MathUtils.lerp(-0.12, -1.9, env);
      shoulderR.current.rotation.x = THREE.MathUtils.lerp(Math.sin(t * 0.8 + 1) * 0.06, -0.25, env);
    }
    if (forearmR.current) {
      forearmR.current.rotation.z = env * Math.sin(t * 9) * 0.5;
    }

    // gentle camera parallax
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 2.4 + state.pointer.x * 0.7, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.5 - state.pointer.y * 0.4, 0.03);
    state.camera.lookAt(0, 0.05, 0);
  });

  return (
    <group ref={root} position={[0, -0.15, 0]}>
      <group ref={hips}>
        {/* pelvis */}
        <RoundedBox args={[0.82, 0.42, 0.5]} radius={0.16} smoothness={4} position={[0, 0, 0]} castShadow>
          {dark(0.45)}
        </RoundedBox>

        {/* legs */}
        {[-0.24, 0.24].map((x) => (
          <group key={x} position={[x, -0.28, 0]}>
            <group position={[0, -0.02, 0]} rotation={[0.04, 0, 0]}>
              <group position={[0, -0.34, 0]}>
                <Capsule r={0.17} len={0.6} />
              </group>
              {/* knee */}
              <mesh position={[0, -0.7, 0.02]} castShadow>
                <sphereGeometry args={[0.15, 20, 20]} />
                {dark(0.4)}
              </mesh>
              {/* shin */}
              <group position={[0, -1.05, 0]} rotation={[-0.06, 0, 0]}>
                <Capsule r={0.14} len={0.6} color={SHELL2} />
              </group>
              {/* foot */}
              <RoundedBox args={[0.26, 0.16, 0.5]} radius={0.06} smoothness={3} position={[0, -1.46, 0.1]} castShadow>
                {dark(0.5)}
              </RoundedBox>
            </group>
          </group>
        ))}

        {/* torso */}
        <group ref={chest} position={[0, 0.28, 0]}>
          <RoundedBox args={[0.66, 0.46, 0.42]} radius={0.14} smoothness={4} position={[0, 0.05, 0]} castShadow>
            {shell(SHELL2, 0.38)}
          </RoundedBox>
          <RoundedBox args={[0.96, 0.66, 0.52]} radius={0.2} smoothness={4} position={[0, 0.6, 0]} castShadow>
            {shell()}
          </RoundedBox>
          {/* chest light */}
          <mesh position={[0, 0.62, 0.27]}>
            <circleGeometry args={[0.1, 32]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={2.4} toneMapped={false} />
          </mesh>

          {/* neck + head */}
          <mesh position={[0, 1.0, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.14, 0.18, 20]} />
            {dark(0.4)}
          </mesh>
          <group ref={head} position={[0, 1.28, 0]}>
            <RoundedBox args={[0.46, 0.5, 0.46]} radius={0.18} smoothness={5} castShadow>
              {shell()}
            </RoundedBox>
            {/* visor */}
            <mesh position={[0, 0.02, 0.23]}>
              <boxGeometry args={[0.34, 0.12, 0.04]} />
              <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={2.6} toneMapped={false} />
            </mesh>
          </group>

          {/* shoulders + arms */}
          <group ref={shoulderL} position={[0.62, 0.78, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.18, 22, 22]} />
              {dark(0.4)}
            </mesh>
            <group position={[0, -0.36, 0]}>
              <Capsule r={0.13} len={0.5} />
              <group position={[0, -0.56, 0]}>
                <Capsule r={0.11} len={0.48} color={SHELL2} />
                <RoundedBox args={[0.16, 0.2, 0.16]} radius={0.05} smoothness={3} position={[0, -0.42, 0]} castShadow>
                  {dark(0.45)}
                </RoundedBox>
              </group>
            </group>
          </group>

          <group ref={shoulderR} position={[-0.62, 0.78, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.18, 22, 22]} />
              {dark(0.4)}
            </mesh>
            <group position={[0, -0.36, 0]}>
              <Capsule r={0.13} len={0.5} />
              <group ref={forearmR} position={[0, -0.56, 0]}>
                <Capsule r={0.11} len={0.48} color={SHELL2} />
                <RoundedBox args={[0.16, 0.2, 0.16]} radius={0.05} smoothness={3} position={[0, -0.42, 0]} castShadow>
                  {dark(0.45)}
                </RoundedBox>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function HumanoidScene(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [2.4, 0.5, 5.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <hemisphereLight args={["#bcd8ff", "#05060c", 0.55]} />
        <ambientLight intensity={0.22} />
        <directionalLight position={[5, 8, 5]} intensity={2.4} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-4, 2, -3]} intensity={36} color={ACCENT} />
        <pointLight position={[3, 1, 3]} intensity={18} color="#8b5cf6" />

        <Body />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.78, 0]}>
          <planeGeometry args={[26, 26]} />
          <MeshReflectorMaterial
            resolution={512}
            mirror={0.5}
            blur={[420, 120]}
            mixBlur={6}
            mixStrength={1.3}
            roughness={0.88}
            depthScale={1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.2}
            color="#05070e"
            metalness={0.6}
          />
        </mesh>
        <ContactShadows position={[0, -1.76, 0]} opacity={0.5} scale={9} blur={2.6} far={4} color="#000814" />

        <Environment resolution={256}>
          <Lightformer intensity={2.2} position={[0, 5, -6]} scale={[12, 6, 1]} color="#cfe3ff" />
          <Lightformer intensity={1.6} position={[-6, 2, 1]} scale={[5, 6, 1]} color="#3aa0ff" />
          <Lightformer intensity={1.2} position={[6, 1, 2]} scale={[5, 6, 1]} color="#8b5cf6" />
        </Environment>
      </Canvas>
    </div>
  );
}
