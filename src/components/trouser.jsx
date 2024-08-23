import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import eventEmitter from './eventEmitter';

export function Model(props) {
  const { nodes, materials } = useGLTF('./models/trouser_N_E_W.glb')

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
    <group {...props} dispose={null} scale={25} position={[0,1, 0.16157]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pleat_None.geometry}
        material={materials.Pleat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('./models/trouser_N_E_W.glb')
