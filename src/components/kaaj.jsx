import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kaaj(props) {
  const { nodes, materials } = useGLTF("./clouseroption-noch/noch_kaaj.glb");
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj.geometry}
        material={materials.Kaaj}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./clouseroption-noch/noch_kaaj.glb");
