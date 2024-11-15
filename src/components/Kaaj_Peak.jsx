
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj_Peak(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak/Peak_Collar_kaaj.glb')
  return (
    <group {...props} dispose={null} scale={20}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Peak_collar_kaaj.geometry}
      material={materials.Kaaj}
      position={[0.019, 0.205, 0.007]}
      rotation={[2.093, 0.606, -0.859]}
      scale={0.01}
    />
  </group>
  )
}

useGLTF.preload('./Coat GLB New modify/Peak/Peak_Collar_kaaj.glb')

export function PeakwideKaaj(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Noch wide/untitled.glb')
  return (
    <group {...props} dispose={null} scale={20}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.peak_kaaj_wide1.geometry}
      material={materials['Kaaj.001']}
      position={[-0.165, 0.159, -0.073]}
      rotation={[2.495, -1.167, 1.917]}
      scale={0.01}
    />
  </group>
  )
}

useGLTF.preload('./Coat GLB New modify/Noch wide/untitled.glb')