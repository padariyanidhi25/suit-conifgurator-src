import React, { useState, useEffect } from 'react';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import eventEmitter from './eventEmitter';
import { Hemfinishing } from './hemfinishing';

const HemSelector = () => {
  const [selectedHem, setSelectedHem] = useState(null); // Set initial state to null
  const [fabricURL, setFabricURL] = useState(null);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 1.25, 8)); // Default camera position
  const { camera } = useThree(); // Access the camera
  const lerpSpeed = 0.05; // Speed for camera transition

  // Smoothly move the camera to a target position
  useFrame(() => {
    camera.position.lerp(targetPosition, lerpSpeed);
  });

  // Event listener for 'confrmlapel' click to reset camera position
  useEffect(() => {
    const handleConfirmLapelClick = () => {
      // Set the camera back to its original position
      setTargetPosition(new Vector3(0, 1.25, 8));
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

  // Fabric selection handling
  // useEffect(() => {
  //   const handleFabricSelection = (fabric) => {
  //     setFabricURL(fabric.textureURL);
  //   };

  //   eventEmitter.on('fabricSelected', handleFabricSelection);

  //   return () => {
  //     eventEmitter.off('fabricSelected', handleFabricSelection);
  //   };
  // }, []);

  // Emit applyFabric event when selectedHem or fabricURL changes
  useEffect(() => {
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
    // console.log('fabric name: ', selectedFabricName);
    setFabricURL(selectedFabricName);

    if (selectedFabricName) {
      eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
    }
    // console.log('fabric url: ', fabricURL);

  }, [selectedHem, fabricURL]);

  // Save selected hem to localStorage
  useEffect(() => {
    localStorage.setItem('selectedHem', selectedHem);
  }, [selectedHem]);

  // Retrieve selected hem from localStorage
  useEffect(() => {
    const saveHem = localStorage.getItem('selectedHem');
    if (saveHem) {
      setSelectedHem(saveHem);
    }
  }, []);

  // Handle hem change and unfinish selection
  useEffect(() => {
    const handleHemChange = (hemType) => {
      if (hemType === 'unfinish') {
        setSelectedHem(null); // Remove hem selection
        setTargetPosition(new Vector3(0, -1, -15));

      } else {
        setSelectedHem(hemType); // Set new hem selection
        setTargetPosition(new Vector3(0, -1, -15));
        // Emit applyFabric event when hem type changes
        if (fabricURL) {
          eventEmitter.emit('applyFabric', { textureURL: fabricURL });
        }
      }
    };

    document.getElementById('4mm').addEventListener('click', () => handleHemChange('hem'));
    document.getElementById('unfinish').addEventListener('click', () => handleHemChange('unfinish')); // Add event listener for unfinish

    return () => {
      document.getElementById('4mm').removeEventListener('click', () => handleHemChange('hem'));
      document.getElementById('unfinish').removeEventListener('click', () => handleHemChange('unfinish'));
    };
  }, []);

  return (
    <>
      {selectedHem === 'hem' && <Hemfinishing />}
      {/* Add additional components or render logic as needed */}
    </>
  );
};

export default HemSelector;
