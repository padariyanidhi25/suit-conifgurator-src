
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Kaaj_Peak(props) {
  const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Peak/Peak collar_kaaj.glb')
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

useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Peak/Peak collar_kaaj.glb')