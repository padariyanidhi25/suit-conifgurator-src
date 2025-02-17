import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Button(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Button.glb')
  return (
    <group {...props} dispose={null} scale={15}>
      <group position={[-0.016, 0.008, -0.013]} rotation={[1.709, -0.118, 0.434]} scale={0.007}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials.button_thread}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials['Button.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Button.glb')