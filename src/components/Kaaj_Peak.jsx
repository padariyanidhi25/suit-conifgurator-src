
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";

export function Kaaj_Peak(props) {
  const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Peak/Peak_Collar Kaaj.glb')

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
        geometry={nodes.Peak_Kaaj.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  )
}

useGLTF.preload('./11-02-25/GLB NEW/Peak/Peak_Collar Kaaj.glb')

export function PeakwideKaaj(props) {
  const { nodes, materials } = useGLTF('./11-02-25/GLB NEW/Peak Wide/peak_collar kaaj_wide.glb')
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
        geometry={nodes.peak_kaaj_wide.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  )
}

useGLTF.preload('./11-02-25/GLB NEW/Peak Wide/peak_collar kaaj_wide.glb')