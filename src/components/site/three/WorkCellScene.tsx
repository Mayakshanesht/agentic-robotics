import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const TEAL = "#0D9488";
const DARK_TEAL = "#0F766E";
const LIGHT_TEAL = "#5EB8AE";
const NAVY = "#0A1C33";
const PANEL = "#E2E8F0";

const BIN_X = -0.45;
const TRAY_X = 0.5;
const TABLE_Y = 0.43;
const CYCLE = 7; // seconds per pick-and-place loop

/** Where the head and the part should be at a given phase of the loop. */
function pose(t: number) {
  const ease = (a: number, b: number, k: number) => a + (b - a) * (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
  if (t < 0.22) return { x: ease(TRAY_X, BIN_X, t / 0.22), y: 0.42, grip: 0.07, holding: false };
  if (t < 0.34) return { x: BIN_X, y: ease(0.42, 0.14, (t - 0.22) / 0.12), grip: 0.07, holding: false };
  if (t < 0.42) return { x: BIN_X, y: 0.14, grip: ease(0.07, 0.035, (t - 0.34) / 0.08), holding: t > 0.38 };
  if (t < 0.54) return { x: BIN_X, y: ease(0.14, 0.42, (t - 0.42) / 0.12), grip: 0.035, holding: true };
  if (t < 0.74) return { x: ease(BIN_X, TRAY_X, (t - 0.54) / 0.2), y: 0.42, grip: 0.035, holding: true };
  if (t < 0.86) return { x: TRAY_X, y: ease(0.42, 0.16, (t - 0.74) / 0.12), grip: 0.035, holding: true };
  if (t < 0.94) return { x: TRAY_X, y: 0.16, grip: ease(0.035, 0.07, (t - 0.86) / 0.08), holding: t < 0.9 };
  return { x: TRAY_X, y: ease(0.16, 0.42, (t - 0.94) / 0.06), grip: 0.07, holding: false };
}

function Cell({ variations, forces, still }: { variations: boolean; forces: boolean; still: boolean }) {
  const head = useRef<THREE.Group>(null);
  const left = useRef<THREE.Mesh>(null);
  const right = useRef<THREE.Mesh>(null);
  const part = useRef<THREE.Mesh>(null);
  const contact = useRef<THREE.Mesh>(null);

  const ghosts = useMemo(
    () => Array.from({ length: 7 }, (_, i) => {
      const k = (i / 6) * Math.PI;
      return { x: Math.cos(k) * 0.52, z: 0.12 + Math.sin(k) * 0.16, r: ((i * 37) % 60) / 100 };
    }),
    [],
  );

  useFrame(({ clock }) => {
    const t = still ? 0.6 : (clock.getElapsedTime() % CYCLE) / CYCLE;
    const p = pose(t);
    if (head.current) head.current.position.set(p.x, TABLE_Y + p.y, 0);
    if (left.current) left.current.position.x = -p.grip;
    if (right.current) right.current.position.x = p.grip;
    if (part.current) {
      if (p.holding) part.current.position.set(p.x, TABLE_Y + p.y - 0.085, 0);
      else if (t > 0.9 || t < 0.2) part.current.position.set(TRAY_X, TABLE_Y + 0.045, 0);
      else part.current.position.set(BIN_X, TABLE_Y + 0.045, 0);
    }
    if (contact.current) {
      const grasping = t > 0.34 && t < 0.56;
      contact.current.visible = forces && grasping;
      const s = 1 + Math.sin(clock.getElapsedTime() * 8) * 0.12;
      contact.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      {/* table */}
      <mesh position={[0, TABLE_Y - 0.03, 0]} receiveShadow>
        <boxGeometry args={[1.7, 0.06, 0.8]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
      </mesh>
      {[[-0.78, -0.33], [0.78, -0.33], [-0.78, 0.33], [0.78, 0.33]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, (TABLE_Y - 0.06) / 2, z]}>
          <boxGeometry args={[0.05, TABLE_Y - 0.06, 0.05]} />
          <meshStandardMaterial color={PANEL} roughness={0.9} />
        </mesh>
      ))}

      {/* bin on the left: floor plus four walls */}
      <group position={[BIN_X, TABLE_Y, 0]}>
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.3, 0.024, 0.3]} />
          <meshStandardMaterial color={LIGHT_TEAL} roughness={0.6} />
        </mesh>
        {[[0, -0.145, 0.3, 0.02], [0, 0.145, 0.3, 0.02], [-0.145, 0, 0.02, 0.3], [0.145, 0, 0.02, 0.3]].map(
          ([x, z, w, d], i) => (
            <mesh key={i} position={[x, 0.035, z]}>
              <boxGeometry args={[w, 0.05, d]} />
              <meshStandardMaterial color={LIGHT_TEAL} roughness={0.55} transparent opacity={0.55} />
            </mesh>
          ),
        )}
      </group>

      {/* tray on the right */}
      <group position={[TRAY_X, TABLE_Y, 0]}>
        <mesh position={[0, 0.01, 0]}>
          <boxGeometry args={[0.34, 0.02, 0.3]} />
          <meshStandardMaterial color="#E6F5F3" roughness={0.7} />
        </mesh>
        {[[0, -0.145, 0.34, 0.016], [0, 0.145, 0.34, 0.016], [-0.165, 0, 0.016, 0.3], [0.165, 0, 0.016, 0.3]].map(
          ([x, z, w, d], i) => (
            <mesh key={i} position={[x, 0.032, z]}>
              <boxGeometry args={[w, 0.044, d]} />
              <meshStandardMaterial color={TEAL} roughness={0.5} transparent opacity={0.45} />
            </mesh>
          ),
        )}
      </group>

      {/* gantry */}
      <mesh position={[0, TABLE_Y + 0.62, -0.02]}>
        <boxGeometry args={[1.5, 0.035, 0.06]} />
        <meshStandardMaterial color="#1E3A5F" roughness={0.5} metalness={0.2} />
      </mesh>
      {[-0.72, 0.72].map((x) => (
        <mesh key={x} position={[x, TABLE_Y + 0.3, -0.02]}>
          <boxGeometry args={[0.04, 0.65, 0.04]} />
          <meshStandardMaterial color="#1E3A5F" roughness={0.6} />
        </mesh>
      ))}

      {/* moving head with two fingers */}
      <group ref={head}>
        <mesh>
          <boxGeometry args={[0.16, 0.1, 0.16]} />
          <meshStandardMaterial color={DARK_TEAL} roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh ref={left} position={[-0.07, -0.09, 0]}>
          <boxGeometry args={[0.025, 0.1, 0.08]} />
          <meshStandardMaterial color={TEAL} roughness={0.4} />
        </mesh>
        <mesh ref={right} position={[0.07, -0.09, 0]}>
          <boxGeometry args={[0.025, 0.1, 0.08]} />
          <meshStandardMaterial color={TEAL} roughness={0.4} />
        </mesh>
        <mesh ref={contact} position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} visible={false}>
          <torusGeometry args={[0.1, 0.012, 8, 32]} />
          <meshBasicMaterial color={TEAL} transparent opacity={0.75} />
        </mesh>
      </group>

      {/* the part */}
      <mesh ref={part} position={[BIN_X, TABLE_Y + 0.045, 0]} castShadow>
        <boxGeometry args={[0.09, 0.09, 0.09]} />
        <meshStandardMaterial color={TEAL} roughness={0.35} />
      </mesh>

      {/* generated variations */}
      {variations &&
        ghosts.map((g, i) => (
          <mesh key={i} position={[g.x, TABLE_Y + 0.045, g.z]} rotation={[0, g.r * Math.PI, 0]}>
            <boxGeometry args={[0.09, 0.09, 0.09]} />
            <meshStandardMaterial color={TEAL} transparent opacity={0.22} roughness={0.5} />
          </mesh>
        ))}

      <ContactShadows position={[0, 0.001, 0]} opacity={0.4} scale={4.5} blur={2.2} far={2.5} color={NAVY} />
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
      <PerspectiveCamera makeDefault position={[1.25, 1.02, 1.55]} fov={42} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[2.5, 4, 2]} intensity={1.5} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color={LIGHT_TEAL} />
      <Cell variations={variations} forces={forces} still={still} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!still}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 0.58, 0]}
      />
    </Canvas>
  );
}
