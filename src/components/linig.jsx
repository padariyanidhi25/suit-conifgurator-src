import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Linig(props) {
  const { nodes, materials } = useGLTF('./lining/lining_new.glb');

  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Full_Lined.geometry}
      material={materials.Lining}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  );
}

useGLTF.preload('./lining/lining_new.glb');

export function Butterfly_Lining(props) {
  const { nodes, materials } = useGLTF('./lining/Butterfly_Lining_GLB.glb')
  return (
    <group {...props} dispose={null} scale={45}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Butterfly_Lining.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./lining/Butterfly_Lining_GLB.glb')
export function Half_Linning(props) {
  const { nodes, materials } = useGLTF('./lining//Half_Linning_GLB.glb')
  return (
    <group {...props} dispose={null} scale={45}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Half_Linning.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./lining//Half_Linning_GLB.glb')