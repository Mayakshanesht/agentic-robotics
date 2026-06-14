import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * CapabilityScene — an interactive WebGL "capability graph": a slowly rotating
 * network of glowing nodes (primitive capabilities) wired by dependency edges,
 * orbiting a wireframe core (the Capability Compiler). Pointer drives parallax.
 *
 * Lightweight by design: ~26 nodes, no postprocessing, additive-emissive glow.
 */

const RADIUS = 2.6;
const NODE_COUNT = 26;

const PALETTE = [
  new THREE.Color("#3aa0ff"), // azure
  new THREE.Color("#34e0a1"), // mint
  new THREE.Color("#8b5cf6"), // violet
];

type NodeData = { pos: THREE.Vector3; color: THREE.Color; size: number };

function buildGraph() {
  const nodes: NodeData[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const pos = new THREE.Vector3(
      Math.cos(theta) * r,
      y,
      Math.sin(theta) * r
    ).multiplyScalar(RADIUS);
    nodes.push({
      pos,
      color: PALETTE[i % PALETTE.length],
      size: 0.05 + (i % 4) * 0.012,
    });
  }
  const edges: [THREE.Vector3, THREE.Vector3, THREE.Color][] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const a = nodes[i];
    [(i + 1) % NODE_COUNT, (i + 7) % NODE_COUNT].forEach((j) => {
      edges.push([a.pos, nodes[j].pos, a.color]);
    });
  }
  return { nodes, edges };
}

function GraphNode({ data, index }: { data: NodeData; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(t * 1.6 + index) * 0.18;
    ref.current.scale.setScalar(pulse);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.65 + Math.sin(t * 1.6 + index) * 0.25;
  });
  return (
    <mesh ref={ref} position={data.pos}>
      <sphereGeometry args={[data.size, 16, 16]} />
      <meshBasicMaterial
        color={data.color}
        transparent
        opacity={0.8}
        toneMapped={false}
      />
    </mesh>
  );
}

function Graph() {
  const group = useRef<THREE.Group>(null);
  const { nodes, edges } = useMemo(() => buildGraph(), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    // gentle pointer parallax
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.2;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      py,
      0.04
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      px,
      0.04
    );
  });

  return (
    <group ref={group}>
      {/* wireframe core — the Capability Compiler */}
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial
          color="#3aa0ff"
          wireframe
          transparent
          opacity={0.22}
          toneMapped={false}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.18} toneMapped={false} />
      </mesh>

      {/* dependency edges */}
      {edges.map(([a, b, color], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={color}
          lineWidth={0.6}
          transparent
          opacity={0.16}
          toneMapped={false}
        />
      ))}

      {/* capability nodes */}
      {nodes.map((n, i) => (
        <GraphNode key={i} data={n} index={i} />
      ))}

      <Sparkles count={60} scale={8} size={2} speed={0.3} color="#3aa0ff" opacity={0.5} />
    </group>
  );
}

export default function CapabilityScene(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
          <Graph />
        </Float>
      </Canvas>
    </div>
  );
}
