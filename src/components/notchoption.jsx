import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
import { useButtonTexture } from "./Buttontexture";

export function Nochdoublebrested(props) {
  const { nodes, materials } = useGLTF(
    "./latest/jacket/Coat Noch & peak Revesion/Noch/breasted.glb"
  );

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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials.Button}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={materials["Jacket.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials["Kaaj.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./latest/jacket/Coat Noch & peak Revesion/Noch/breasted.glb");

export function Notchdoublebtn(props) {
  const { nodes, materials } = useGLTF(
    "./latest/jacket/Coat Noch & peak Revesion/Noch/double.glb"
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
          geometry={nodes.Mesh003.geometry}
          material={materials["Jacket.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Button.001"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025.geometry}
          material={materials["Jacket.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_1.geometry}
          material={materials["Kaaj.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./latest/jacket/Coat Noch & peak Revesion/Noch/double.glb");

export function Notchsinglebtn(props) {
  const { nodes, materials } = useGLTF(
    "./latest/jacket/Coat Noch & peak Revesion/Noch/single.glb"
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["Jacket.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["Button.002"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023.geometry}
          material={materials["Jacket.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_1.geometry}
          material={materials["Kaaj.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./latest/jacket/Coat Noch & peak Revesion/Noch/single.glb");
