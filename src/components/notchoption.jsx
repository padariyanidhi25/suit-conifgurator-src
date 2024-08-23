import React, { useRef,useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';
import { useButtonTexture } from './Buttontexture';


export function Nochdoublebrested(props) {
  const { nodes, materials } = useGLTF('./clouseroption-noch/brested_noch_new.glb');

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
    <group {...props} dispose={null} scale={45}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials['Button.003']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012.geometry}
          material={materials['Jacket.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_1.geometry}
          material={materials['Kaaj.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./clouseroption-noch/brested_noch_new.glb')

export function Notchdoublebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-noch/noch_doublebtn_new.glb')
    const [textureURL, setTextureURL] = useState(null);
  //   const [buttonTextureURL, setButtonTextureURL] = useState(null);
  //  useEffect(() => {
  //   const handleButtonSelected = ({ textureURL }) => {
  //     setButtonTextureURL(textureURL);
  //     applyButtonTexture(textureURL);
  //   };

  //   eventEmitter.on('buttonSelected', handleButtonSelected);

  //   return () => {
  //     eventEmitter.off('buttonSelected', handleButtonSelected);
  //   };
  // }, []);

  // const applyButtonTexture = (texturePath) => {
  //   const loader = new THREE.TextureLoader();
  //   loader.load(texturePath, (texture) => {
  //     if (materials['Button.004']) { // Update the correct material key for your model
  //       materials['Button.004'].map = texture;
  //       materials['Button.004'].needsUpdate = true;
  //     }
  //   });
  // };
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
      <group {...props} dispose={null} scale={45}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010.geometry}
          material={materials['Jacket.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_1.geometry}
          material={materials['Kaaj.003']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials['Jacket.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials['Button.004']}
        />
      </group>
    </group>
    )
  }
  
  useGLTF.preload('./clouseroption-noch/noch_doublebtn_new.glb')

  export function Notchsinglebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-noch/noch_singlebtn_new.glb')
    const [textureURL, setTextureURL] = useState(null);
    // const [buttonTextureURL, setButtonTextureURL] = useState(null);
    // useEffect(() => {
    //   const handleButtonSelected = ({ textureURL }) => {
    //     setButtonTextureURL(textureURL);
    //     applyButtonTexture(textureURL);
    //   };
  
    //   eventEmitter.on('buttonSelected', handleButtonSelected);
  
    //   return () => {
    //     eventEmitter.off('buttonSelected', handleButtonSelected);
    //   };
    // }, []);
  
    // const applyButtonTexture = (texturePath) => {
    //   const loader = new THREE.TextureLoader();
    //   loader.load(texturePath, (texture) => {
    //     // Assuming the button material has a specific key like 'Button.011'
    //     if (materials['Button.005']) {
    //       materials['Button.005'].map = texture;
    //       materials['Button.005'].needsUpdate = true;
    //     }
    //   });
    // };
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
      <group {...props} dispose={null} scale={45}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials['Jacket.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials['Kaaj.004']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008.geometry}
          material={materials['Jacket.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_1.geometry}
          material={materials['Button.005']}
        />
      </group>
    </group>
    )
  }
  
  useGLTF.preload('./clouseroption-noch/noch_singlebtn_new.glb')
  