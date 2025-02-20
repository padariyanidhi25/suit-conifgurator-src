import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import eventEmitter from "./eventEmitter";

export function Linig(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Lining/Full__Lined.glb");
  useEffect(() => {
    const handleApplyLiningColor = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyLiningColor", handleApplyLiningColor);

    return () => {
      eventEmitter.off("applyLiningColor", handleApplyLiningColor);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Full__Lined.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Lining/Full__Lined.glb");

export function Butterfly_Lining(props) {
  const { nodes, materials } = useGLTF( "./GLB NEW (26-1-25)/Lining/Butterfly_Lining.glb" );
  useEffect(() => {
    const handleApplyLiningColor = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyLiningColor", handleApplyLiningColor);

    return () => {
      eventEmitter.off("applyLiningColor", handleApplyLiningColor);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Butterfly_Lining.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Lining/Butterfly_Lining.glb");

export function Half_Linning(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Lining/Half_Linning.glb" );
  useEffect(() => {
    const handleApplyLiningColor = ({ textureURL }) => {

      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyLiningColor", handleApplyLiningColor);

    return () => {
      eventEmitter.off("applyLiningColor", handleApplyLiningColor);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Half_Linning.geometry}
        material={materials.Lining}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./GLB NEW (26-1-25)/Lining/Half_Linning.glb");
