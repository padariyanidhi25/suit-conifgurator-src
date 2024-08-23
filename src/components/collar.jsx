import { useEffect } from 'react';
import * as THREE from 'three';
import eventEmitter from './eventEmitter';
import { useGLTF } from '@react-three/drei';

export function Notch_Collar(props) {
  const { nodes, materials } = useGLTF('./collar/Notch_Collar_new.glb');

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Notch_Collar.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  );
}

export function Peak_Collor(props) {
  const { nodes, materials } = useGLTF('./collar/Peak_Collar_new.glb');

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Peak_Collor.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  );
}
