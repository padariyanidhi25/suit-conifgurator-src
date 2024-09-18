import React, { useRef,useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';
import { useButtonTexture } from './Buttontexture';



export function Peakdoublebreasted(props) {
  const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Peak/breasted.glb')
  
 
  useButtonTexture(materials,'Button.003')

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
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials['Button.004']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh032.geometry}
          material={materials['Jacket.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh032_1.geometry}
          material={materials['Kaaj.010']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Peak/breasted.glb')

export function Peakdoublebtn(props) {
    const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Peak/double.glb')
    const [textureURL, setTextureURL] = useState(null);
  
    useButtonTexture(materials,'Button.004')
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
      <group {...props} dispose={null} scale={20}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials['Jacket.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials['Button.003']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031.geometry}
          material={materials['Jacket.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_1.geometry}
          material={materials['Kaaj.008']}
        />
      </group>
    </group>
  )
}
  
  useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Peak/double.glb')

  
export function Peaksinglebtn(props) {
    const { nodes, materials } = useGLTF('./latest/jacket/Coat Noch & peak Revesion/Peak/single.glb')
    const [textureURL, setTextureURL] = useState(null);

    useButtonTexture(materials,'Button.005')
  
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
      <group {...props} dispose={null} scale={20}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials['Jacket.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials['Button.002']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030.geometry}
          material={materials['Jacket.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030_1.geometry}
          material={materials['Kaaj.006']}
        />
      </group>
    </group>
  )
}
  
  useGLTF.preload('./latest/jacket/Coat Noch & peak Revesion/Peak/single.glb')
  