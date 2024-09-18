import { useEffect } from 'react';
import * as THREE from 'three';
import eventEmitter from './eventEmitter';
import { useGLTF } from '@react-three/drei';

export function Notch_Collar(props) {
  const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Noch/notch_collar.glb');

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
<group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notch_collar.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}
useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Noch/notch_collar.glb');
export function Peak_Collor(props) {
  const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Peak/peak_collar.glb');

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
    <group {...props} dispose={null} scale={20}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.peak_collar1.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}
useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Peak/peak_collar.glb')