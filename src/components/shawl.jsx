import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from "./eventEmitter";
import * as THREE from "three";

export function Shawlsingle(props) {
  const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Shawl/shawl_single_button_wide.glb')
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
        <mesh castShadow receiveShadow geometry={nodes.Mesh054.geometry} material={materials.AMF} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh054_1.geometry}
          material={materials.Jacket_Collar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh054_2.geometry}
          material={materials.Jacket}
        />
      </group>
  </group>
  )
}

useGLTF.preload('./11-02-25/GLB NEW/Shawl/shawl_single_button_wide.glb')

export function Shawldouble(props) {
    const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Shawl/shawl_single_button.glb')
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
        <mesh castShadow receiveShadow geometry={nodes.Mesh053.geometry} material={materials.AMF} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh053_1.geometry}
          material={materials.Jacket_Collar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh053_2.geometry}
          material={materials.Jacket}
        />
      </group>
      </group>
    )
  }
  
  useGLTF.preload('./11-02-25/GLB NEW/Shawl/shawl_single_button.glb')
  