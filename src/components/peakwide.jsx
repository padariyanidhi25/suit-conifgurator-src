import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function PeakwideBreasted(props) {
  const { nodes, materials } = useGLTF(
    "./Coat GLB New modify/Peak wide/peak_double_breasted_wide.glb"
  );

  useButtonTexture(materials, "Button.003");

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
      </group>
    </group>
  );
}

useGLTF.preload("./Coat GLB New modify/Peak wide/peak_double_breasted_wide.glb");

export function PeakwideDouble(props) {
    const { nodes, materials } = useGLTF( "./Coat GLB New modify/Peak wide/peak_double_button_wide.glb");
  
    useButtonTexture(materials, "Button.003");
  
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
          geometry={nodes.Mesh003.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.pasted__Kaaj}
        />
      </group>
    </group>
    );
  }
  
  useGLTF.preload("./Coat GLB New modify/Peak wide/peak_double_button_wide.glb");

  export function PeakWidesingle(props) {
    const { nodes, materials } = useGLTF( "./Coat GLB New modify/Peak wide/peak_single_button_wide.glb");
  
    useButtonTexture(materials, "Button.003");
  
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
            geometry={nodes.Mesh002.geometry}
            material={materials.Jacket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials.Kaaj}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("./Coat GLB New modify/Peak wide/peak_single_button_wide.glb");