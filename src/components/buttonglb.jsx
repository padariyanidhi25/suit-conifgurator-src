import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Breastedbutton(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/breastedbutton.glb')
  useButtonTexture(materials, "Button.003")
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials['Button.003']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./Coat GLB New modify/breastedbutton.glb')

export function Doublebutton(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/doublebutton.glb')
    useButtonTexture(materials, "Button.004")

    return (
      <group {...props} dispose={null} scale={20}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials['Jacket.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials['Button.004']}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/doublebutton.glb')

  export function Singlebutton(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/singlebutton.glb')
    useButtonTexture(materials, "Button.002")

    return (
      <group {...props} dispose={null} scale={20}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials['Jacket.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials['Button.002']}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/singlebutton.glb')