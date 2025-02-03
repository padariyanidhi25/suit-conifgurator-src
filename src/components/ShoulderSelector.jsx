import React, { useState, useEffect } from 'react';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Lightly_padded, Structured } from './shoulder';


const ShoulderSelector=()=>{
    const [selectedShoulder,setSelectedShoulder]=useState('padded')
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
    const handleConfirmShoulderClick = () => {
      // Set the camera back to its original position
      setTargetPosition(new Vector3(0, 3.25, 8));

      
    };

    const confrmshoulderBtn = document.getElementById('confrmshoulder');
    if (confrmshoulderBtn) {
        confrmshoulderBtn.addEventListener('click', handleConfirmShoulderClick);
    }

    return () => {
      if (confrmshoulderBtn) {
        confrmshoulderBtn.removeEventListener('click', handleConfirmShoulderClick);
      }
    };
  }, []);


  // useEffect(() => {
  //   const handleFabricSelection = (fabric) => {
  //     setFabricURL(fabric.textureURL);
  //   };

  //   eventEmitter.on('fabricSelected', handleFabricSelection);

  //   return () => {
  //     eventEmitter.off('fabricSelected', handleFabricSelection);
  //   };
  // }, []);

  useEffect(() => {
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
    // console.log('fabric name: ', selectedFabricName);
    setFabricURL(selectedFabricName);

    if (selectedFabricName) {
      eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
    }
    // console.log('fabric url: ', fabricURL);

  }, [selectedShoulder, fabricURL]);
  
  useEffect(() => {
    localStorage.setItem('selectedShoulder', selectedShoulder);
  }, [selectedShoulder]);


  useEffect(() => {
    const savedShoulder = localStorage.getItem('selectedShoulder');
    if (savedShoulder) {
        setSelectedShoulder(savedShoulder);
    }
  }, []);
  useEffect(() => {
    const handleShoulderChange = (shoulderType) => {
        setSelectedShoulder(shoulderType);
      setTargetPosition(new Vector3(0,7, -15));
    };

    document.getElementById('lightly_padded').addEventListener('click', () => {
        handleShoulderChange('padded');
    });
    document.getElementById('structured').addEventListener('click', () => {
        handleShoulderChange('structured');
    });

    return () => {
      document.getElementById('lightly_padded').removeEventListener('click', handleShoulderChange);
      document.getElementById('structured').removeEventListener('click', handleShoulderChange);
    };
  }, []);

  return (
    <>
      {selectedShoulder === 'padded' && <Lightly_padded />}
      {selectedShoulder === 'structured' && <Structured />}
    </>
  );
};

export default ShoulderSelector;
