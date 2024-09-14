import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Button(props) {
  const { nodes, materials } = useGLTF('./trouser/Button.glb')
  return (
    <group {...props} dispose={null} scale={15}>
      <group position={[-0.007, 0.123, 0.017]} rotation={[1.709, -0.118, 0.434]} scale={0.007}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials.button_thread}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials.pasted__Button}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./trouser/Button.glb')