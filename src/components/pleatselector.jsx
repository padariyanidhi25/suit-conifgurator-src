import React, { useState, useEffect } from 'react';
import eventEmitter from './eventEmitter';
import { Forward_double_pleat, Forward_single_pleat, Pleat_none, Standard_double_pleat, Standard_single_pleat } from './trouserpleat';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';

const PleatSelector = () => {
    const [selectedpleat, setSelectedpleat] = useState('none'); // Default to 'flap'
    const [fabricURL, setFabricURL] = useState(null);
    const [targetPosition, setTargetPosition] = useState(new Vector3(0, 2, 8)); // Default camera position
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
        setTargetPosition(new Vector3(0, 2, 8));
  
        document.getElementById('pleat-option').style.display = 'none'
        document.getElementById('confirmpleat').style.display = 'none'
        document.getElementById('trousr').style.display = 'flex';
      };
  
      const confrmlapelBtn = document.getElementById('confrmpleat');
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
      }, [selectedpleat, fabricURL]);

    useEffect(() => {
        const handlePleatChange = (pleatType) => {
            setSelectedpleat(pleatType);
            setTargetPosition(new Vector3(0,4, -5));

        };

        const pleat_none = document.getElementById('pleat_none');
        const standard_single_pleat = document.getElementById('standard_single_pleat');
        const standard_double_pleat = document.getElementById('standard_double_pleat');
        const forward_single_pleat = document.getElementById('forward_single_pleat');
        const forward_double_pleat = document.getElementById('forward_double_pleat');

        pleat_none.addEventListener('click', () => handlePleatChange('none'));
        standard_single_pleat.addEventListener('click', () => handlePleatChange('standard_single'));
        standard_double_pleat.addEventListener('click', () => handlePleatChange('standard_double'));
        forward_single_pleat.addEventListener('click', () => handlePleatChange('forward_single'));
        forward_double_pleat.addEventListener('click', () => handlePleatChange('forward_double'));


        return () => {
            pleat_none.removeEventListener('click', () => handlePleatChange('none'));
            standard_single_pleat.removeEventListener('click', () => handlePleatChange('standard_single'));
            standard_double_pleat.removeEventListener('click', () => handlePleatChange('standard_double'));
            forward_single_pleat.removeEventListener('click', () => handlePleatChange('forward_single'));
            forward_double_pleat.removeEventListener('click', () => handlePleatChange('forward_double'));

        };
    }, []);

    return (
        <>
            {selectedpleat === 'none' && <Pleat_none/>}
            {selectedpleat === 'standard_single' && <Standard_single_pleat />}
            {selectedpleat === 'standard_double' && <Standard_double_pleat />}
            {selectedpleat === 'forward_single' && <Forward_single_pleat />}
            {selectedpleat === 'forward_double' && <Forward_double_pleat />}
        </>
    );
};

export default PleatSelector;
