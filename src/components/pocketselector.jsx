import React, { useState, useEffect } from 'react';
import { Flap_Pocket, Patch_Pocket, Besom_Pocket, Upperpocket, Halfmoon } from "./pockets";
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';

const PocketSelector = () => {
    const [selectedLowerPocket, setSelectedLowerPocket] = useState('flap'); // Default to 'flap'
    const [selectedUpperPocket, setSelectedUpperPocket] = useState(null);
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
      const handleConfirmPocketClick = () => {
        // Set the camera back to its original position
        setTargetPosition(new Vector3(0, 3.25, 8));
  
        // Hide the relevant UI components
        document.getElementById('pocket_menu').style.display = 'none';
        document.getElementById('pocketContent').style.display = 'none';
        document.getElementById('confirmcon').style.display = 'none';
        document.getElementById('upper_pocket').style.display = 'none';
        document.getElementById('confrm').style.display = 'none';
        document.getElementById('monogrm').style.display = 'flex';
      
      };
  
      const confrmlapelBtn = document.getElementById('confrmpkt');
      if (confrmlapelBtn) {
        confrmlapelBtn.addEventListener('click', handleConfirmPocketClick);
      }
  
      return () => {
        if (confrmlapelBtn) {
          confrmlapelBtn.removeEventListener('click', handleConfirmPocketClick);
        }
      };
    }, []);


    // useEffect(() => {
    //     const handleFabricSelection = (fabric) => {
    //       setFabricURL(fabric.textureURL);
    //     };
    
    //     eventEmitter.on('fabricSelected', handleFabricSelection);
    
    //     return () => {
    //       eventEmitter.off('fabricSelected', handleFabricSelection);
    //     };
    //   }, []);
    
    useEffect(() => {
      const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
      // console.log('fabric name: ', selectedFabricName);
      setFabricURL(selectedFabricName);
  
      if (selectedFabricName) {
        eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
      }
      // console.log('fabric url: ', fabricURL);
  
    }, [selectedLowerPocket, fabricURL]);
      
      useEffect(() => {
        localStorage.setItem('selectedLowerPocket', selectedLowerPocket);
      }, [selectedLowerPocket]);
    
     useEffect(() => {
        const savedLowerPocket = localStorage.getItem('selectedLowerPocket');
        if (savedLowerPocket) {
          setSelectedLowerPocket(savedLowerPocket);
        }
      }, []);

    useEffect(() => {
        const handleLowerPocketChange = (pocketType) => {
            setSelectedLowerPocket(pocketType);
            setTargetPosition(new Vector3(0, 2, -10));
 // Emit the applyFabric event with the current fabric URL when the waistband changes
 if (fabricURL) {
  eventEmitter.emit('applyFabric', { textureURL: fabricURL });
}
        };

        const flapPocketButton = document.getElementById('flap-pocket');
        const patchPocketButton = document.getElementById('patch-pocket');
        const besomPocketButton = document.getElementById('besom-pocket');

     flapPocketButton.addEventListener('click', () => handleLowerPocketChange('flap'));
         patchPocketButton.addEventListener('click', () => handleLowerPocketChange('patch'));
         besomPocketButton.addEventListener('click', () => handleLowerPocketChange('besom'));
        return () => {
          flapPocketButton.removeEventListener('click', () => handleLowerPocketChange('flap'));
             patchPocketButton.removeEventListener('click', () => handleLowerPocketChange('patch'));
             besomPocketButton.removeEventListener('click', () => handleLowerPocketChange('besom'));
        };
    }, []);

    return (
        <>
            {selectedLowerPocket === 'flap' && <Flap_Pocket />}
            {selectedLowerPocket === 'patch' && <Patch_Pocket />}
            {selectedLowerPocket === 'besom' && <Besom_Pocket />}
            {/* {selectedUpperPocket === 'upper' && <Upperpocket />}
            {selectedUpperPocket === 'halfmoon' && <Halfmoon />} */}
        </>
    );
};

export default PocketSelector;
