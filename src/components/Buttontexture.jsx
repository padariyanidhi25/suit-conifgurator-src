import { useEffect } from 'react';
import * as THREE from 'three';
import eventEmitter from './eventEmitter';

export const useButtonTexture = (materials, materialKey) => {
  useEffect(() => {
    const handleButtonSelected = ({ textureURL }) => {
      applyButtonTexture(textureURL);
    };

    eventEmitter.on('buttonSelected', handleButtonSelected);

    return () => {
      eventEmitter.off('buttonSelected', handleButtonSelected);
    };
  }, [materials, materialKey]);

  const applyButtonTexture = (texturePath) => {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
      if (materials[materialKey]) {
        materials[materialKey].map = texture;
        materials[materialKey].needsUpdate = true;
      }
    });
  };
};
