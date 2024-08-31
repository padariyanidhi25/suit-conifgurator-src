import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Linig(props) {
  const { nodes, materials } = useGLTF('./lining/Full_Linning.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Full_Lined.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./lining/Full_Linning.glb');

export function Butterfly_Lining(props) {
  const { nodes, materials } = useGLTF('./lining/Butterfly_Lining.glb')
  return (
    <group {...props} dispose={null}>
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

useGLTF.preload('./lining/Butterfly_Lining.glb')

export function Half_Linning(props) {
  const { nodes, materials } = useGLTF('./lining/Half_Linning.glb')
  return (
    <group {...props} dispose={null}>
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

useGLTF.preload('./lining/Half_Linning.glb')