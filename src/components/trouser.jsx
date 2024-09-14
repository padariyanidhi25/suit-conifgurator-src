import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import eventEmitter from './eventEmitter';

export function Model(props) {
  const { nodes, materials } = useGLTF('./trouser/Pant_back.glb')

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes('Button')) { // Skip button materials
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
   
    eventEmitter.on('applyFabric', handleApplyFabric);


    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);

    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={15} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pant_back.geometry}
        material={materials.Pant}
        position={[0, 0.176, -0.012]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./trouser/Pant_back.glb')
