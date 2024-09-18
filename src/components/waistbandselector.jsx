import React, { useState, useEffect } from 'react';
import { Singleside,Doubleside,Standardhidden,Standardhidden4cm} from './waistband';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';

const WaistbandSelector = () => {
  const [selectedWaistband, setSelectedWaistband] = useState('hidden4');
  const [fabricURL, setFabricURL] = useState(null);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 3.25, 8)); // Default camera position
  const { camera } = useThree(); // Access the camera
  const lerpSpeed = 0.05; // Speed for camera transition

  // This function will smoothly move the camera to a target position
  useFrame(() => {
    camera.position.lerp(targetPosition, lerpSpeed);
  });

  // Event listener for 'confrmlapel' click to reset camera position
  useEffect(() => {
    const handleConfirmLapelClick = () => {
      // Set the camera back to its original position
      setTargetPosition(new Vector3(0, 3.25, 8));

      
    };

    const confrmlapelBtn = document.getElementById('confrmwaistband');
    if (confrmlapelBtn) {
      confrmlapelBtn.addEventListener('click', handleConfirmLapelClick);
    }

    return () => {
      if (confrmlapelBtn) {
        confrmlapelBtn.removeEventListener('click', handleConfirmLapelClick);
      }
    };
  }, []);

  useEffect(() => {
    const handleFabricSelection = (fabric) => {
      setFabricURL(fabric.textureURL);
    };

    eventEmitter.on('fabricSelected', handleFabricSelection);

    return () => {
      eventEmitter.off('fabricSelected', handleFabricSelection);
    };
  }, []);

  useEffect(() => {
    if (fabricURL) {
      eventEmitter.emit('applyFabric', { textureURL: fabricURL });
    }
  }, [selectedWaistband, fabricURL]);
  
  useEffect(() => {
    localStorage.setItem('selectedWaistband', selectedWaistband);
  }, [selectedWaistband]);


  useEffect(() => {
    const savedCollar = localStorage.getItem('selectedWaistband');
    if (savedCollar) {
        setSelectedWaistband(savedCollar);
    }
  }, []);
  useEffect(() => {
    const handleWaistbandChange = (collarType) => {
        setSelectedWaistband(collarType);
      setTargetPosition(new Vector3(0,7, -15));
    };

    document.getElementById('standard_hidden_button_4cm').addEventListener('click', () => {
        handleWaistbandChange('hidden4');
    });
    document.getElementById('standard_hidden_button_5cm').addEventListener('click', () => {
        handleWaistbandChange('hidden5');
    });
    document.getElementById('single_side_clouser').addEventListener('click', () => {
        handleWaistbandChange('singlesideclouser');
    });
    document.getElementById('double_side_clouser').addEventListener('click', () => {
        handleWaistbandChange('doublesideclouser');
    });

    return () => {
      document.getElementById('standard_hidden_button_4cm').removeEventListener('click', handleWaistbandChange);
      document.getElementById('standard_hidden_button_5cm').removeEventListener('click', handleWaistbandChange);
      document.getElementById('single_side_clouser').removeEventListener('click', handleWaistbandChange);
      document.getElementById('double_side_clouser').removeEventListener('click', handleWaistbandChange);
    };
  }, []);

  return (
    <>
      {selectedWaistband === 'hidden4' && <Singleside />}
      {selectedWaistband === 'hidden5' && <Doubleside />}
      {selectedWaistband === 'singlesideclouser' && <Standardhidden />}
      {selectedWaistband === 'doublesideclouser' && <Standardhidden4cm />}
    </>
  );
};

export default WaistbandSelector;
