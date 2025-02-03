
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj_Peak(props) {
  const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Peak/Peak_Collar Kaaj.glb')
  return (
    <group {...props} dispose={null} scale={20}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Peak_Kaaj.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  )
}

useGLTF.preload('./GLB NEW (26-1-25)/Peak/Peak_Collar Kaaj.glb')

export function PeakwideKaaj(props) {
  const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Peak Wide/peak_collar kaaj_wide.glb')
  return (
    <group {...props} dispose={null} scale={20}>
     <mesh
        castShadow
        receiveShadow
        geometry={nodes.peak_kaaj_wide.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  )
}

useGLTF.preload('./GLB NEW (26-1-25)/Peak Wide/peak_collar kaaj_wide.glb')