import React, { useRef,useState,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';


export function Pocket_jeted(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_jeted.glb')
  const [textureURL, setTextureURL] = useState(null);

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
      geometry={nodes.pocket_jeted1.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}
  

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_jeted.glb')


export function Pocket_seam(props) {
    const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_seam.glb')
    const [textureURL, setTextureURL] = useState(null);

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
        geometry={nodes.pocket_seam1.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}
  useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_seam.glb')
  
  export function Pocket_standard(props) {
    const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_standard.glb')
    const [textureURL, setTextureURL] = useState(null);

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
        geometry={nodes.pocket_standard1.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}
  
  useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pocket/pocket_standard.glb')