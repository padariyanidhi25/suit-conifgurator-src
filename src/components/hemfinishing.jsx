import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hemfinishing(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Hem Finishing/Turn_Up_4_cm.glb')
  return (
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Turn_Up_4_cm.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Hem Finishing/Turn_Up_4_cm.glb')
