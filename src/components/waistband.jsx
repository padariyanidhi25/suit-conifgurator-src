
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Waistbend(props) {
  const { nodes, materials } = useGLTF('./trouser/Pent_Belt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Belt.geometry}
        material={materials.Pant}
        position={[-0.001, 0.226, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./trouser/Pent_Belt.glb')