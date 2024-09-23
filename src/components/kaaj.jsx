

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj(props) {
  const { nodes, materials } = useGLTF('./clouseroption-noch/noch_kaaj-1.glb')
  return (
    <group {...props} dispose={null} position={[0.005, -0.07, 0.0469]}  scale={20} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj.geometry}
        material={materials['Kaaj.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./clouseroption-noch/noch_kaaj-1.glb')