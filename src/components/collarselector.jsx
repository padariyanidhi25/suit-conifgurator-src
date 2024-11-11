import React, { useState, useEffect } from 'react';
import { Notch_Collar, Notch_Wide, Peak_Collor, Peak_Wide } from './collar';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Shawldouble, Shawlsingle } from './shawl';

const CollarSelector = () => {
  const [selectedCollar, setSelectedCollar] = useState('notch');
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

      // Hide the relevant UI components
      document.getElementById('lapelContent').style.display = 'none';
      document.getElementById('lapel-option').style.display = 'none';
      document.getElementById('lapel-width').style.display = 'none';
      document.getElementById('lapel-buttonhole').style.display = 'none';
      document.getElementById('confirmlapel').style.display = 'none';
      document.getElementById('monogrm').style.display = 'flex';
    };

    const confrmlapelBtn = document.getElementById('confrmlapel');
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
  }, [selectedCollar, fabricURL]);

  
  
  useEffect(() => {
    localStorage.setItem('selectedCollar', selectedCollar);
  }, [selectedCollar]);


  useEffect(() => {
    const savedCollar = localStorage.getItem('selectedCollar');
    if (savedCollar) {
      setSelectedCollar(savedCollar);
    }
  }, []);
  useEffect(() => {
    const handleCollarChange = (collarType) => {
      setSelectedCollar(collarType);
      setTargetPosition(new Vector3(0,7, -15));
    };

    document.getElementById('notch_collar').addEventListener('click', () => {
      handleCollarChange('notch');
    });
    document.getElementById('peak_collar').addEventListener('click', () => {
      handleCollarChange('peak');
    });
    document.getElementById('notch_wide').addEventListener('click', () => {
      handleCollarChange('notchwide');
    });
    document.getElementById('peak_wide').addEventListener('click', () => {
      handleCollarChange('peakwide');
    });
    // document.getElementById('shawl_single').addEventListener('click', () => {
    //   handleCollarChange('shawlsingle');
    // });
    // document.getElementById('shawl_double').addEventListener('click', () => {
    //   handleCollarChange('shawldouble');
    // });


    return () => {
      document.getElementById('notch_collar').removeEventListener('click', handleCollarChange);
      document.getElementById('peak_collar').removeEventListener('click', handleCollarChange);
      document.getElementById('notch_wide').removeEventListener('click', handleCollarChange);
      document.getElementById('peak_wide').removeEventListener('click', handleCollarChange);
      // document.getElementById('shawl_single').removeEventListener('click', handleCollarChange);
      // document.getElementById('shawl_double').removeEventListener('click', handleCollarChange);


    };
  }, []);

  return (
    <>
      {selectedCollar === 'notch' && <Notch_Collar />}
      {selectedCollar === 'peak' && <Peak_Collor />}
      {selectedCollar === 'notchwide' && <Notch_Wide />}
      {selectedCollar === 'peakwide' && <Peak_Wide/>}
      {/* {selectedCollar === 'shawlsingle' && <Shawlsingle/>}
      {selectedCollar === 'shawldouble' && <Shawldouble/>} */}

    </>
  );
};

export default CollarSelector;
