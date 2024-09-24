import React, { useRef ,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from "./eventEmitter";
import * as THREE from "three";
export function Hemfinishing(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Hem Finishing/Turn_Up_4_cm.glb')
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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Turn_Up_4_cm.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Hem Finishing/Turn_Up_4_cm.glb')