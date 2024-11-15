

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Noch/Noch_Collar_kaaj.glb')
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

useGLTF.preload('./Coat GLB New modify/Noch/Noch_Collar_kaaj.glb')

export function NotchwideKaaj(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Noch wide/noch_kaaj_wide.glb')
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj_wide1.geometry}
        material={materials.Kaaj}
        position={[0.002, -0.003, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./Coat GLB New modify/Noch wide/noch_kaaj_wide.glb')


