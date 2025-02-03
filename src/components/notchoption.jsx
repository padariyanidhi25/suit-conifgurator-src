import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Nochdoublebrested(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Noch/noch_double_breasted.glb");

  useButtonTexture(materials, "Button");

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
        <mesh castShadow receiveShadow geometry={nodes.Mesh015.geometry} material={materials.AMF} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_1.geometry}
          material={materials.Jacket}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Noch/noch_double_breasted.glb");

export function Notchdoublebtn(props) {
  const { nodes, materials } = useGLTF(
    "./GLB NEW (26-1-25)/Noch/notch_double_button.glb"
  );
  const [textureURL, setTextureURL] = useState(null);

  useButtonTexture(materials, "Button.001");

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
          geometry={nodes.Mesh013.geometry}
          material={materials.Jacket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_1.geometry}
          material={materials.AMF}
        />
      </group>
  </group>
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Noch/notch_double_button.glb");

export function Notchsinglebtn(props) {
  const { nodes, materials } = useGLTF(
    "./GLB NEW (26-1-25)/Noch/notch_single_button.glb"
  );
  const [textureURL, setTextureURL] = useState(null);

  useButtonTexture(materials, "Button.002");

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
        <mesh castShadow receiveShadow geometry={nodes.Mesh014.geometry} material={materials.AMF} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials.Jacket}
        />
      </group>
  </group>
 
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Noch/notch_single_button.glb");
