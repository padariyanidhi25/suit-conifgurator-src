import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Notchbreastedwide(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/Noch Wide/noch_double_breasted_wide.glb");

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
                material.map.flipY = false;
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
          geometry={nodes.Mesh024.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_1.geometry}
          material={materials.AMF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/Noch Wide/noch_double_breasted_wide.glb");

export function NotchDoublebuttonwide(props) {
    const { nodes, materials } = useGLTF( "./11-02-25/GLB NEW/Noch Wide/notch_double_button_wide.glb");
  
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
                  material.map.flipY = false;
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
          geometry={nodes.Mesh023.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_1.geometry}
          material={materials.AMF}
        />
      </group>
    </group>
    );
  }
  
  useGLTF.preload("./11-02-25/GLB NEW/Noch Wide/notch_double_button_wide.glb");

  export function NotchSingleButtonWide(props) {
    const { nodes, materials } = useGLTF( "./11-02-25/GLB NEW/Noch Wide/notch_single_button_wide.glb");
  
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
                  material.map.flipY = false;
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
          geometry={nodes.Mesh022.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_1.geometry}
          material={materials.AMF}
        />
      </group>
      </group>
    );
  }
  
  useGLTF.preload("./11-02-25/GLB NEW/Noch Wide/notch_single_button_wide.glb");