

import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import * as THREE from "three";
import eventEmitter from './eventEmitter';

/*
 ** CHAIR MATERIALS
 */

function Chair( ...props ) {

  const { nodes, materials, scene } = useGLTF('./models/classic_noch_doublebtn_new.glb');


  const [suitchange, setsuitchange] = useState(false)

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

    eventEmitter.on('fabricSelected', handleFabricSelection);

    return () => {
      eventEmitter.off('fabricSelected', handleFabricSelection);
    };
  }, []);

  function changeJacketMaterial(texturePath) {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
      // Update all materials with the new texture
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

  document.getElementById('classic').addEventListener('click', function () {

    setsuitchange(!suitchange)

  })
  document.getElementById('breasted').addEventListener('click', function () {
    setsuitchange(false);
  });
 
  document.querySelectorAll('.cursor-pointer').forEach((tab)=>{
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cursor-pointer').forEach((tab)=>tab.classList.remove('active'));
      tab.classList.add('active');
    })
  })


  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');
    })
  })
  document.querySelectorAll('.sublinks').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sublinks').forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');
    })
  })
  document.querySelectorAll('.subtablinks').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.subtablinks').forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');
      if (tab.id === 'upperpocketModel') {
        pocket.style.display = 'flex'
        upper_pocket.style.display = 'none'
        upper_pocket.classList.remove('pocket-active')
        pocket.classList.add('pocket-active')
      }
      else if (tab.id === 'lowerpocketmodel') {
        pocket.style.display = 'none'
        upper_pocket.style.display = 'flex'
        pocket.classList.remove('pocket-active')
        upper_pocket.classList.add('pocket-active')
      }
    })
  })
 
  
    return (
      <group {...props} dispose={null} scale={45}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Full_Lined.geometry}
        material={materials['Lining.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      /> */}
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={materials['Jacket.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials['Kaaj.009']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Buttons.geometry}
        material={materials['Button.011']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./models/classic_noch_doublebtn_new.glb')
export default Chair;  

