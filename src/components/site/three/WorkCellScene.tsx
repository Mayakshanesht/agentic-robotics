import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const BODY = "#F2F5F8";
const JOINT = "#1E3A5F";
const CAN = "#D7263D";
const TRAY = "#F59E0B";
const WOOD = "#C8A06A";
const TEAL = "#0D9488";
const PANEL = "#E2E8F0";

const TABLE_Y = 0.72;
const CAN_HOME = new THREE.Vector3(-0.22, TABLE_Y + 0.065, 0.1);
const TRAY_SPOT = new THREE.Vector3(0.3, TABLE_Y + 0.055, 0.08);
const CYCLE = 8;

/** Hand-authored arm keyframes. The can follows the real hand position, so the two always agree. */
const keys = [
  { t: 0.0, yaw: 0.1, pitch: -0.15, elbow: 0.35, grip: 0.055, hold: false },
  { t: 0.22, yaw: -0.5, pitch: -1.15, elbow: 1.0, grip: 0.055, hold: false },
  { t: 0.32, yaw: -0.5, pitch: -1.15, elbow: 1.0, grip: 0.028, hold: true },
  { t: 0.46, yaw: -0.5, pitch: -0.75, elbow: 0.7, grip: 0.028, hold: true },
  { t: 0.64, yaw: 0.42, pitch: -0.8, elbow: 0.75, grip: 0.028, hold: true },
  { t: 0.76, yaw: 0.42, pitch: -1.1, elbow: 1.0, grip: 0.028, hold: true },
  { t: 0.84, yaw: 0.42, pitch: -1.1, elbow: 1.0, grip: 0.055, hold: false },
  { t: 1.0, yaw: 0.1, pitch: -0.15, elbow: 0.35, grip: 0.055, hold: false },
];

function sample(t: number) {
  let a = keys[0];
  let b = keys[keys.length - 1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (t >= keys[i].t && t <= keys[i + 1].t) {
      a = keys[i];
      b = keys[i + 1];
      break;
    }
  }
  const span = b.t - a.t || 1;
  const raw = (t - a.t) / span;
  const k = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
  return {
    yaw: a.yaw + (b.yaw - a.yaw) * k,
    pitch: a.pitch + (b.pitch - a.pitch) * k,
    elbow: a.elbow + (b.elbow - a.elbow) * k,
    grip: a.grip + (b.grip - a.grip) * k,
    hold: a.hold,
    grasping: a.hold && b.hold,
  };
}

function Cell({ variations, forces, still }: { variations: boolean; forces: boolean; still: boolean }) {
  const shoulder = useRef<THREE.Group>(null);
  const forearm = useRef<THREE.Group>(null);
  const hand = useRef<THREE.Group>(null);
  const fingerL = useRef<THREE.Mesh>(null);
  const fingerR = useRef<THREE.Mesh>(null);
  const can = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const grabbed = useRef(false);
  const world = useRef(new THREE.Vector3());

  useFrame(({ clock }) => {
    const t = still ? 0.3 : (clock.getElapsedTime() % CYCLE) / CYCLE;
    const p = sample(t);
    if (shoulder.current) {
      shoulder.current.rotation.z = p.yaw;
      shoulder.current.rotation.x = p.pitch;
    }
    if (forearm.current) forearm.current.rotation.x = p.elbow;
    if (fingerL.current) fingerL.current.position.x = -p.grip;
    if (fingerR.current) fingerR.current.position.x = p.grip;
    if (hand.current && can.current) {
      hand.current.getWorldPosition(world.current);
      if (p.hold) {
        grabbed.current = true;
        can.current.position.set(world.current.x, world.current.y - 0.075, world.current.z);
      } else if (grabbed.current) {
        grabbed.current = false;
        can.current.position.copy(TRAY_SPOT);
      } else if (t < 0.25) {
        can.current.position.copy(CAN_HOME);
      }
    }
    if (ring.current) {
      ring.current.visible = forces && p.grasping;
      const s = 1 + Math.sin(clock.getElapsedTime() * 9) * 0.14;
      ring.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      {/* table */}
      <mesh position={[0, TABLE_Y - 0.02, 0]} receiveShadow>
        <boxGeometry args={[1.5, 0.045, 0.75]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      {[[-0.68, -0.3], [0.68, -0.3], [-0.68, 0.3], [0.68, 0.3]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, (TABLE_Y - 0.045) / 2, z]}>
          <boxGeometry args={[0.045, TABLE_Y - 0.045, 0.045]} />
          <meshStandardMaterial color={PANEL} roughness={0.85} />
        </mesh>
      ))}

      {/* tray */}
      <group position={[0.3, TABLE_Y, 0.08]}>
        <mesh position={[0, 0.012, 0]} receiveShadow>
          <boxGeometry args={[0.34, 0.025, 0.26]} />
          <meshStandardMaterial color={TRAY} roughness={0.5} />
        </mesh>
        {[[0, -0.125, 0.34, 0.015], [0, 0.125, 0.34, 0.015], [-0.165, 0, 0.015, 0.26], [0.165, 0, 0.015, 0.26]].map(
          ([x, z, w, d], i) => (
            <mesh key={i} position={[x, 0.035, z]}>
              <boxGeometry args={[w, 0.05, d]} />
              <meshStandardMaterial color={TRAY} roughness={0.45} />
            </mesh>
          ),
        )}
      </group>

      {/* can */}
      <mesh ref={can} position={CAN_HOME.toArray()} castShadow>
        <cylinderGeometry args={[0.033, 0.033, 0.12, 24]} />
        <meshStandardMaterial color={CAN} roughness={0.3} metalness={0.25} />
      </mesh>

      {/* humanoid */}
      <group position={[0, 0, -0.52]}>
        <mesh position={[0, 0.42, 0]}>
          <boxGeometry args={[0.26, 0.84, 0.2]} />
          <meshStandardMaterial color={JOINT} roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.02, 0]} castShadow>
          <boxGeometry args={[0.34, 0.42, 0.24]} />
          <meshStandardMaterial color={BODY} roughness={0.45} />
        </mesh>
        <mesh position={[0, 1.33, 0.01]}>
          <boxGeometry args={[0.17, 0.19, 0.17]} />
          <meshStandardMaterial color={BODY} roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.33, 0.1]}>
          <boxGeometry args={[0.13, 0.08, 0.02]} />
          <meshStandardMaterial color={JOINT} roughness={0.25} metalness={0.4} />
        </mesh>
        {/* left arm, resting */}
        <group position={[-0.22, 1.16, 0]} rotation={[0.15, 0, -0.12]}>
          <mesh position={[0, -0.14, 0]}>
            <capsuleGeometry args={[0.042, 0.2, 4, 12]} />
            <meshStandardMaterial color={BODY} roughness={0.45} />
          </mesh>
          <mesh position={[0, -0.38, 0]}>
            <capsuleGeometry args={[0.036, 0.18, 4, 12]} />
            <meshStandardMaterial color={BODY} roughness={0.45} />
          </mesh>
        </group>
        {/* right arm, working */}
        <group ref={shoulder} position={[0.22, 1.16, 0]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshStandardMaterial color={JOINT} roughness={0.5} />
          </mesh>
          <mesh position={[0, -0.14, 0]}>
            <capsuleGeometry args={[0.042, 0.2, 4, 12]} />
            <meshStandardMaterial color={BODY} roughness={0.45} />
          </mesh>
          <group ref={forearm} position={[0, -0.28, 0]}>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshStandardMaterial color={JOINT} roughness={0.5} />
            </mesh>
            <mesh position={[0, -0.13, 0]}>
              <capsuleGeometry args={[0.036, 0.18, 4, 12]} />
              <meshStandardMaterial color={BODY} roughness={0.45} />
            </mesh>
            <group ref={hand} position={[0, -0.26, 0]}>
              <mesh>
                <boxGeometry args={[0.07, 0.05, 0.06]} />
                <meshStandardMaterial color={JOINT} roughness={0.4} />
              </mesh>
              <mesh ref={fingerL} position={[-0.055, -0.055, 0]}>
                <boxGeometry args={[0.018, 0.08, 0.05]} />
                <meshStandardMaterial color={BODY} roughness={0.4} />
              </mesh>
              <mesh ref={fingerR} position={[0.055, -0.055, 0]}>
                <boxGeometry args={[0.018, 0.08, 0.05]} />
                <meshStandardMaterial color={BODY} roughness={0.4} />
              </mesh>
              <mesh ref={ring} position={[0, -0.075, 0]} rotation={[Math.PI / 2, 0, 0]} visible={false}>
                <torusGeometry args={[0.075, 0.009, 8, 28]} />
                <meshBasicMaterial color={TEAL} transparent opacity={0.85} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* generated variations of the can */}
      {variations &&
        Array.from({ length: 7 }).map((_, i) => {
          const k = (i / 6) * Math.PI;
          return (
            <mesh key={i} position={[Math.cos(k) * 0.45, TABLE_Y + 0.065, 0.2 + Math.sin(k) * 0.12]}>
              <cylinderGeometry args={[0.033, 0.033, 0.12, 20]} />
              <meshStandardMaterial color={CAN} transparent opacity={0.22} roughness={0.5} />
            </mesh>
          );
        })}

      <ContactShadows position={[0, 0.001, 0]} opacity={0.4} scale={5} blur={2.2} far={3} color="#0A1C33" />
    </group>
  );
}

export default function WorkCellScene({
  variations,
  forces,
  still,
}: {
  variations: boolean;
  forces: boolean;
  still: boolean;
}) {
  return (
    <Canvas dpr={[1, 1.6]} shadows gl={{ antialias: true }} style={{ background: "transparent" }}>
      <PerspectiveCamera makeDefault position={[1.15, 1.45, 1.85]} fov={40} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[2.5, 4, 2.5]} intensity={1.4} castShadow />
      <directionalLight position={[-3, 2, -1]} intensity={0.3} color="#5EB8AE" />
      <Cell variations={variations} forces={forces} still={still} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!still}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 0.9, 0]}
      />
    </Canvas>
  );
}
