import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from "./eventEmitter";
import * as THREE from "three";

export function Shawlsingle(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Shawl/single_shawl_button_wide.glb')
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.needsUpdate = true;
              }
            }
          });
        });
      }
    };

    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={20}>
    <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={materials.Jacket_Collar}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.Kaaj} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.Jacket}
      />
    </group>
  </group>
  )
}

useGLTF.preload('./Coat GLB New modify/Shawl/single_shawl_button_wide.glb')

export function Shawldouble(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Shawl/single_shawl_button.glb')
    useEffect(() => {
        const handleApplyFabric = ({ textureURL }) => {
          if (textureURL) {
            const loader = new THREE.TextureLoader();
            loader.load(textureURL, (texture) => {
              Object.keys(materials).forEach((key) => {
                if (!key.includes("Button")) {
                  // Skip button materials
                  const material = materials[key];
                  if (material.map) {
                    material.map = texture;
                    material.needsUpdate = true;
                  }
                }
              });
            });
          }
        };
    
        eventEmitter.on("applyFabric", handleApplyFabric);
    
        return () => {
          eventEmitter.off("applyFabric", handleApplyFabric);
        };
      }, [materials]);
    return (
        <group {...props} dispose={null} scale={20}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011.geometry}
            material={materials.Jacket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011_1.geometry}
            material={materials.Kaaj}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011_2.geometry}
            material={materials.Jacket}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Shawl/single_shawl_button.glb')
  