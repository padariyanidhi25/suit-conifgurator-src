import React, { useRef,useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';
import { useButtonTexture } from './Buttontexture';

export function Peakdoublebreasted(props) {
  const { nodes, materials } = useGLTF('./clouseroption-peak/doublebreastedpeak.glb')
  const [textureURL, setTextureURL] = React.useState(null);
 
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
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh017.geometry}
          material={materials['Jacket.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh017_1.geometry}
          material={materials['Kaaj.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials['Button.003']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./clouseroption-peak/doublebreastedpeak.glb')

export function Peakdoublebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-peak/doublebuttonpeak.glb')
    const [textureURL, setTextureURL] = React.useState(null);
  
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
      <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials['Jacket.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials.pasted__Kaaj}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials['Jacket.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials['Button.004']}
        />
      </group>
    </group>
  )
}
  
  useGLTF.preload('./clouseroption-peak/doublebuttonpeak.glb')

  
export function Peaksinglebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-peak/singlebuttonpeak.glb')
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
      <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials['Jacket.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials['Button.005']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018.geometry}
          material={materials['Jacket.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials['Kaaj.004']}
        />
      </group>
    </group>
  )
}
  
  useGLTF.preload('./clouseroption-peak/singlebuttonpeak.glb')
  