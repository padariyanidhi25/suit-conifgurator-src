

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj(props) {
  const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Noch/noch_collar_kaaj.glb')
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
)
}

useGLTF.preload('./GLB NEW (26-1-25)/Noch/noch_collar_kaaj.glb')

export function NotchwideKaaj(props) {
  const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Noch Wide/noch_Colar kaaj_wide.glb')
  return (
    <group {...props} dispose={null} scale={20}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj_wide1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./GLB NEW (26-1-25)/Noch Wide/noch_Colar kaaj_wide.glb')


