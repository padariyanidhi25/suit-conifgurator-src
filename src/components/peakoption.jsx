import React, { useRef,useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';
import { useButtonTexture } from './Buttontexture';

export function Peakdoublebreasted(props) {
  const { nodes, materials } = useGLTF('./clouseroption-peak/peakdoublebreasted_new.glb')
  const [textureURL, setTextureURL] = React.useState(null);
  // const [buttonTextureURL, setButtonTextureURL] = React.useState(null);
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
  //     if (materials['Button.006']) {
  //       materials['Button.006'].map = texture;
  //       materials['Button.006'].needsUpdate = true;
  //     }
  //   });
  // };
  useButtonTexture(materials,'Button.006')

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
          geometry={nodes.Mesh017.geometry}
          material={materials['Jacket.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh017_1.geometry}
          material={materials['Kaaj.005']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.double_breasted_buttons.geometry}
        material={materials['Button.006']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./clouseroption-peak/peakdoublebreasted_new.glb')

export function Peakdoublebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-peak/peakdoublebutton_new.glb')
    const [textureURL, setTextureURL] = React.useState(null);
    // const [buttonTextureURL, setButtonTextureURL] = React.useState(null);
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
    //     if (materials['Button.007']) {
    //       materials['Button.007'].map = texture;
    //       materials['Button.007'].needsUpdate = true;
    //     }
    //   });
    // };
    useButtonTexture(materials,'Button.007')
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
          geometry={nodes.Mesh016.geometry}
          material={materials['Jacket.011']}
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
          geometry={nodes.Mesh013.geometry}
          material={materials['Jacket.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_1.geometry}
          material={materials['Button.007']}
        />
      </group>
    </group>
    )
  }
  
  useGLTF.preload('./clouseroption-peak/peakdoublebutton_new.glb')

  
export function Peaksinglebtn(props) {
    const { nodes, materials } = useGLTF('./clouseroption-peak/peaksinglebutton_new.glb')
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
    //     if (materials['Button.008']) {
    //       materials['Button.008'].map = texture;
    //       materials['Button.008'].needsUpdate = true;
    //     }
    //   });
    // };
    useButtonTexture(materials,'Button.008')
  
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
          geometry={nodes.Mesh018.geometry}
          material={materials['Jacket.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials['Kaaj.006']}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014.geometry}
          material={materials['Jacket.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials['Button.008']}
        />
      </group>
    </group>
    )
  }
  
  useGLTF.preload('./clouseroption-peak/peaksinglebutton_new.glb')
  