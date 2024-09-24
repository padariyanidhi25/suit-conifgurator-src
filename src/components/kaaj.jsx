

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj(props) {
  const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Noch/noch_collar kaaj.glb')
  return (
    <group {...props} dispose={null} scale={20}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.noch_collar_kaaj.geometry}
      material={materials.Kaaj}
      position={[0.017, 0.203, 0.009]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}

useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Noch/noch_collar kaaj.glb')