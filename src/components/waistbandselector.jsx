import React, { useState, useEffect } from 'react';
import { Singleside,Doubleside,Standardhidden,Standardhidden4cm, Standard4cm, Standard5cm} from './waistband';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Hook4cm, Hook5cm } from './hook';
import { Button, Button5cm } from './waistbandbutton';


const WaistbandSelector = () => {
  const [selectedWaistband, setSelectedWaistband] = useState('standard4');
  const [fabricURL, setFabricURL] = useState(undefined);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 3.25, 8)); // Default camera position
  const { camera } = useThree(); 
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
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
   
    setFabricURL(selectedFabricName);

    if (selectedFabricName) {
      eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
    }
    

  }, [selectedWaistband, fabricURL]);
  
  useEffect(() => {
    localStorage.setItem('selectedWaistband', selectedWaistband);
  }, [selectedWaistband]);


  useEffect(() => {
    const savedWaistband = localStorage.getItem('selectedWaistband');
    if (savedWaistband) {
        setSelectedWaistband(savedWaistband);
    }
  }, []);
  useEffect(() => {
    const handleWaistbandChange = (waistbandType) => {
        setSelectedWaistband(waistbandType);
      setTargetPosition(new Vector3(0,7, -15));

     
    };
    

    document.getElementById('standard_hidden_button_4cm').addEventListener('click', () => {
        handleWaistbandChange('hidden4');
    });
    document.getElementById('standard_hidden_button_5cm').addEventListener('click', () => {
        handleWaistbandChange('hidden5');
    });
    document.getElementById('standard_button_4cm').addEventListener('click', () => {
      handleWaistbandChange('standard4');
  });
  document.getElementById('standard_button_5cm').addEventListener('click', () => {
    handleWaistbandChange('standard5');
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
      document.getElementById('standard_button_4cm').removeEventListener('click', handleWaistbandChange);
      document.getElementById('standard_button_5cm').removeEventListener('click', handleWaistbandChange);
      document.getElementById('single_side_clouser').removeEventListener('click', handleWaistbandChange);
      document.getElementById('double_side_clouser').removeEventListener('click', handleWaistbandChange);
    };
  }, [fabricURL]);


  return (
    <>
    
    {selectedWaistband === 'hidden4' && (
        <>
          <Standardhidden4cm />
          <Hook4cm /> {/* Show Hook4cm when hidden4 is selected */}
        </>
      )}
       {selectedWaistband === 'standard4' && (
        <>
          <Standard4cm/>
          <Button/>
          <Hook4cm /> {/* Show Hook4cm when hidden4 is selected */}
        </>
      )}
       {selectedWaistband === 'standard5' && (
        <>
          <Standard5cm/>
         <Button5cm/>

          <Hook5cm /> {/* Show Hook5cm when hidden5 is selected */}
        </>
      )}
 {selectedWaistband === 'hidden5' && (
        <>
          <Standardhidden />
          <Hook5cm /> {/* Show Hook5cm when hidden5 is selected */}
        </>
      )}
      {selectedWaistband === 'singlesideclouser' && <Singleside /> }
      {selectedWaistband === 'doublesideclouser' && <Doubleside /> }
    </>
  );
};

export default WaistbandSelector;
