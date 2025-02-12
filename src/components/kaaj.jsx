

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";

export function Kaaj(props) {
  const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Noch/noch_collar_kaaj.glb')

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
                material.map.flipY = false;
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
     <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
)
}

useGLTF.preload('./11-02-25/GLB NEW/Noch/noch_collar_kaaj.glb')

export function NotchwideKaaj(props) {
  const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Noch Wide/noch_Colar kaaj_wide.glb')
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
                material.map.flipY = false;
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
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.noch_kaaj_wide1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./11-02-25/GLB NEW/Noch Wide/noch_Colar kaaj_wide.glb')


