import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Peakdoublebreasted(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/Peak/peak_double_breasted.glb");

  useButtonTexture(materials, "Button.003");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
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
          geometry={nodes.Mesh032.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh032_1.geometry}
          material={materials.AMF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/Peak/peak_double_breasted.glb");

export function Peakdoublebtn(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/Peak/peak_double_button.glb");
  const [textureURL, setTextureURL] = useState(null);

  useButtonTexture(materials, "Button.004");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
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
  }, [materials.Jacket]);

  return (
    <group {...props} dispose={null} scale={20}>
     <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033_1.geometry}
          material={materials.AMF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/Peak/peak_double_button.glb");

export function Peaksinglebtn(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/Peak/peak_single_button.glb");
  const [textureURL, setTextureURL] = useState(null);

  useButtonTexture(materials, "Button.002");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
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
          geometry={nodes.Mesh031.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_1.geometry}
          material={materials.AMF}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/Peak/peak_single_button.glb");
