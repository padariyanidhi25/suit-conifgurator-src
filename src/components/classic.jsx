import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import eventEmitter from './eventEmitter';

export  function Classic(props) {
  const { nodes, materials } = useGLTF('./models/classic_noch_doublebtn_new.glb');
  const [textureURL, setTextureURL] = useState(null);
  const [buttonTextureURL, setButtonTextureURL] = useState(null);

  useEffect(() => {
    const handleButtonSelected = ({ textureURL }) => {
      setButtonTextureURL(textureURL);
      applyButtonTexture(textureURL);
    };

    eventEmitter.on('buttonSelected', handleButtonSelected);

    return () => {
      eventEmitter.off('buttonSelected', handleButtonSelected);
    };
  }, []);

  const applyButtonTexture = (texturePath) => {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
      // Assuming the button material has a specific key like 'Button.011'
      if (materials['Button.011']) {
        materials['Button.011'].map = texture;
        materials['Button.011'].needsUpdate = true;
      }
    });
  };
  useEffect(() => {
    const handleFabricSelection = (fabric) => {
      setTextureURL(fabric.textureURL);
      // Call the function to change the material here
      changeJacketMaterial(fabric.textureURL);
    };

    const handleButtonSelection = (button) => {
      setButtonTextureURL(button.textureURL);
      applyButtonTexture(button.textureURL);
    };

    eventEmitter.on('fabricSelected', handleFabricSelection);
    eventEmitter.on('buttonSelected', handleButtonSelection);

    return () => {
      eventEmitter.off('fabricSelected', handleFabricSelection);
      eventEmitter.off('buttonSelected', handleButtonSelection);
    };
  }, []);

  function changeJacketMaterial(texturePath) {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
      Object.keys(materials).forEach((key) => {
        const material = materials[key];
        if (material.map) {
          material.map = texture;
          material.needsUpdate = true;
        }
      });
    });
  }
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
 

  return (<></>
    // <group {...props} dispose={null} scale={20} >
     
    //   <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh026.geometry}
    //       material={materials['Jacket.019']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh026_1.geometry}
    //       material={materials['Kaaj.009']}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Sleeves_Buttons.geometry}
    //     material={materials['Button.011']}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    // </group>
  )
}

useGLTF.preload('./models/classic_noch_doublebtn_new.glb')