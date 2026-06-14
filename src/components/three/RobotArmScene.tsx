import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * RobotArmScene — a stylized industrial robot arm built procedurally from
 * primitives, with an idle "breathing" articulation, slow turntable rotation
 * and cinematic lighting. No external model files → fast, reliable, on-brand.
 */

const BODY = "#161c2b";
const JOINT = "#0d1220";
const ACCENT = new THREE.Color("#3aa0ff");
const ACCENT2 = new THREE.Color("#34e0a1");

function metal(color: string) {
  return (
    <meshStandardMaterial color={color} metalness={0.85} roughness={0.32} />
  );
}

function JointRing({ color }: { color: THREE.Color }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.34, 0.05, 16, 48]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2.2}
        metalness={0.4}
        roughness={0.4}
        toneMapped={false}
      />
    </mesh>
  );
}

function Arm() {
  const root = useRef<THREE.Group>(null);
  const shoulder = useRef<THREE.Group>(null);
  const elbow = useRef<THREE.Group>(null);
  const wrist = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      root.current.rotation.y += 0.0025;
      // subtle pointer parallax
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        -state.pointer.y * 0.15,
        0.04
      );
    }
    if (shoulder.current) shoulder.current.rotation.z = -0.35 + Math.sin(t * 0.6) * 0.22;
    if (elbow.current) elbow.current.rotation.z = 0.9 + Math.sin(t * 0.6 + 0.8) * 0.3;
    if (wrist.current) {
      wrist.current.rotation.z = 0.3 + Math.sin(t * 0.6 + 1.6) * 0.35;
      wrist.current.rotation.y = Math.sin(t * 0.4) * 0.5;
    }
  });

  return (
    <group ref={root} position={[0, -1.35, 0]}>
      {/* base */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.7, 0.26, 48]} />
        {metal(JOINT)}
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 48]} />
        <meshStandardMaterial color={"#0a0f1e"} metalness={0.6} roughness={0.5} />
      </mesh>
      {/* column */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.34, 0.6, 32]} />
        {metal(BODY)}
      </mesh>

      {/* shoulder pivot */}
      <group ref={shoulder} position={[0, 0.8, 0]}>
        <JointRing color={ACCENT} />
        {/* upper arm */}
        <mesh position={[0, 0.75, 0]} castShadow>
          <boxGeometry args={[0.4, 1.5, 0.4]} />
          {metal(BODY)}
        </mesh>
        <mesh position={[0, 0.75, 0.205]}>
          <boxGeometry args={[0.16, 1.2, 0.02]} />
          <meshStandardMaterial color={"#0a0f1e"} metalness={0.3} roughness={0.6} />
        </mesh>

        {/* elbow pivot */}
        <group ref={elbow} position={[0, 1.5, 0]}>
          <JointRing color={ACCENT} />
          {/* forearm */}
          <mesh position={[0, 0.62, 0]} castShadow>
            <boxGeometry args={[0.32, 1.25, 0.32]} />
            {metal(BODY)}
          </mesh>

          {/* wrist pivot */}
          <group ref={wrist} position={[0, 1.25, 0]}>
            <mesh>
              <sphereGeometry args={[0.22, 24, 24]} />
              {metal(JOINT)}
            </mesh>
            <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.22, 0.035, 12, 36]} />
              <meshStandardMaterial color={ACCENT2} emissive={ACCENT2} emissiveIntensity={2.4} toneMapped={false} />
            </mesh>
            {/* gripper */}
            <mesh position={[0, 0.28, 0]}>
              <boxGeometry args={[0.26, 0.18, 0.26]} />
              {metal(BODY)}
            </mesh>
            <mesh position={[-0.12, 0.46, 0]} rotation={[0, 0, 0.12]}>
              <boxGeometry args={[0.05, 0.28, 0.16]} />
              {metal(JOINT)}
            </mesh>
            <mesh position={[0.12, 0.46, 0]} rotation={[0, 0, -0.12]}>
              <boxGeometry args={[0.05, 0.28, 0.16]} />
              {metal(JOINT)}
            </mesh>
            {/* glowing workpiece between grippers */}
            <mesh position={[0, 0.5, 0]}>
              <icosahedronGeometry args={[0.07, 0]} />
              <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={3} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function RobotArmScene(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [3.4, 1.2, 4.6], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <hemisphereLight args={["#9ec5ff", "#05060c", 0.6]} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-6, 3, -4]} intensity={1.2} color="#3aa0ff" />
        <pointLight position={[-4, 2, -3]} intensity={45} color="#3aa0ff" />
        <pointLight position={[3, -1, 3]} intensity={22} color="#8b5cf6" />

        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
          <Arm />
        </Float>

        <ContactShadows position={[0, -1.45, 0]} opacity={0.55} scale={9} blur={2.6} far={4} color="#000814" />
      </Canvas>
    </div>
  );
}
