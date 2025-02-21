import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import eventEmitter from './eventEmitter';

/*
 ** CHAIR MATERIALS
 */

function Chair(...props) {
  const { nodes, materials } = useGLTF('./models/classic_noch_doublebtn_new.glb');

  const [suitchange, setsuitchange] = useState(false);
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
      if (materials['Button.011']) {
        materials['Button.011'].map = texture;
        materials['Button.011'].needsUpdate = true;
      }
    });
  };

  useEffect(() => {
    const handleFabricSelection = (fabric) => {
      setTextureURL(fabric.textureURL);
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
            if (!key.includes('Button')) {
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

  useEffect(() => {
    // Handle click event for 'classic' and 'breasted'
    const classicButton = document.getElementById('classic');
    const breastedButton = document.getElementById('breasted');
    const tabLinks = document.querySelectorAll('.cursor-pointer');
    const tabItems = document.querySelectorAll('.tab');
    const subLinks = document.querySelectorAll('.sublinks');
    const subTabLinks = document.querySelectorAll('.subtablinks');

    const handleClickClassic = () => setsuitchange(!suitchange);
    const handleClickBreasted = () => setsuitchange(false);

    classicButton?.addEventListener('click', handleClickClassic);
    breastedButton?.addEventListener('click', handleClickBreasted);

    tabLinks.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabLinks.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    tabItems.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabItems.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    subLinks.forEach((tab) => {
      tab.addEventListener('click', () => {
        subLinks.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    subTabLinks.forEach((tab) => {
      tab.addEventListener('click', () => {
        subTabLinks.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
        if (tab.id === 'upperpocketModel') {
          pocket.style.display = 'flex';
          upper_pocket.style.display = 'none';
          upper_pocket.classList.remove('pocket-active');
          pocket.classList.add('pocket-active');
        } else if (tab.id === 'lowerpocketmodel') {
          pocket.style.display = 'none';
          upper_pocket.style.display = 'flex';
          pocket.classList.remove('pocket-active');
          upper_pocket.classList.add('pocket-active');
        }
      });
    });

    // Cleanup the event listeners when the component is unmounted
    return () => {
      classicButton?.removeEventListener('click', handleClickClassic);
      breastedButton?.removeEventListener('click', handleClickBreasted);
      tabLinks.forEach((tab) => {
        tab.removeEventListener('click', () => {
          tabLinks.forEach((tab) => tab.classList.remove('active'));
          tab.classList.add('active');
        });
      });
      tabItems.forEach((tab) => {
        tab.removeEventListener('click', () => {
          tabItems.forEach((tab) => tab.classList.remove('active'));
          tab.classList.add('active');
        });
      });
      subLinks.forEach((tab) => {
        tab.removeEventListener('click', () => {
          subLinks.forEach((tab) => tab.classList.remove('active'));
          tab.classList.add('active');
        });
      });
      subTabLinks.forEach((tab) => {
        tab.removeEventListener('click', () => {
          subTabLinks.forEach((tab) => tab.classList.remove('active'));
          tab.classList.add('active');
          // Any other logic here...
        });
      });
    };
  }, [suitchange]); // Add the suitchange to the dependency array if needed

  return <></>;

}

useGLTF.preload('./models/classic_noch_doublebtn_new.glb');
export default Chair;
