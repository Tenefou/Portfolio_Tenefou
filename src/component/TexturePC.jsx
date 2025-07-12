import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/TexturePC-transformed.glb");

  const scaleFactor = 2;

  return (
    <group {...props} dispose={null} scale={scaleFactor}>
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Screen}
        position={[0.787, 0.78, -0.008]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.773, 1, 0.046]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.Bas}
        position={[-0.006, -0.011, -0.008]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.773, 1, 0.046]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Keyboard}
        position={[0.551, 0.027, -0.876]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.045, 0.057, 0.004]}
      />
    </group>
  );
}

useGLTF.preload("/TexturePC-transformed.glb");
