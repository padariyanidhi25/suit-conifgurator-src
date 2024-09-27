import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three'


export function Hook4cm(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/4cm standard_button belt_huk.glb')
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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.belt_huk_4cm.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/4cm standard_button belt_huk.glb')

export function Hook5cm(props) {
    const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/5cm_standard_button belt_huk.glb')
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
      <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.standard_button_belt_huk_5cm.geometry}
          material={materials['Pant cloth']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    )
  }
  
  useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/5cm_standard_button belt_huk.glb')