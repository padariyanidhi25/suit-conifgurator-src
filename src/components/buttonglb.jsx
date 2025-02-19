import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Breastedbutton(props) {
  const { nodes, materials } = useGLTF('./11-02-25/Coat/double_breasted_buttons.glb')
  useButtonTexture(materials, "Button")
  return (
    <group {...props} dispose={null} scale={20}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials.Button}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./11-02-25/Coat/double_breasted_buttons.glb')

export function Doublebutton(props) {
    const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Buttons/Double_Buttons.glb')
    useButtonTexture(materials, "Button")

    return (
      <group {...props} dispose={null} scale={20}>
         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.Button}
        />
      </group>
      </group>
    )
  }
  
  useGLTF.preload('./GLB NEW (26-1-25)/Buttons/Double_Buttons.glb')

  export function Singlebutton(props) {
    const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Buttons/Single_Buttons.glb')
    useButtonTexture(materials, "Button")

    return (
      <group {...props} dispose={null} scale={20}>
       <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.Button}
        />
      </group>
      </group>
    )
  }
  
  useGLTF.preload('./GLB NEW (26-1-25)/Buttons/Single_Buttons.glb')


  export function Shawlbutton(props){
    const { nodes, materials } = useGLTF('./GLB NEW (26-1-25)/Buttons/Single_Shall_Buttons.glb')
    useButtonTexture(materials, "Button")

    return (
      <group {...props} dispose={null} scale={20}>
        <group position={[0.002, 0.153, 0.022]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials.Button}
        />
      </group>
      </group>
    )
  }
  
  useGLTF.preload('./GLB NEW (26-1-25)/Buttons/Single_Shall_Buttons.glb')
 