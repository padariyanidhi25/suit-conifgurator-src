import React, { useState, useEffect } from 'react';
import { Notch_Collar, Peak_Collor } from './collar';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Hemfinishing } from './hemfinishing';

const HemSelector = () => {
  const [selectedHem, setSelectedHem] = useState('null');
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

    const confrmlapelBtn = document.getElementById('confrmhemfinishing');
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
  }, [selectedHem, fabricURL]);
  
  useEffect(() => {
    localStorage.setItem('selectedHem', selectedHem);
  }, [selectedHem]);


  useEffect(() => {
    const saveHem = localStorage.getItem('selectedHem');
    if (saveHem) {
        setSelectedHem(saveHem);
    }
  }, []);
  useEffect(() => {
    const handleHemChange = (hemType) => {
        setSelectedHem(hemType);
      setTargetPosition(new Vector3(0,-1, -15));
    };

    document.getElementById('4mm').addEventListener('click', () => {
        handleHemChange('hem');
    });
    // document.getElementById('peak_collar').addEventListener('click', () => {
    //   handleCollarChange('peak');
    // });

    return () => {
      document.getElementById('4mm').removeEventListener('click', handleHemChange);
    //   document.getElementById('peak_collar').removeEventListener('click', handleCollarChange);
    };
  }, []);

  return (
    <>
      {selectedHem === 'hem' && <Hemfinishing />}
      {/* {selectedCollar === 'peak' && <Peak_Collor />} */}
    </>
  );
};

export default HemSelector;
