import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Breastedbutton, Doublebutton, Shawlbutton, Singlebutton } from './buttonglb';
import { Shawldouble, Shawlsingle } from './shawl';

const ShawlSelector = ({ defaultShawl, collarType, selectedComponent }) => {
    const [selectedShawl, setSelectedShawl] = useState(defaultShawl);
    const [fabricURL, setFabricURL] = useState(null);
    const [buttonTextureURL, setButtonTextureURL] = useState(null);

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
  
      const confrmlapelBtn = document.getElementById('confrmshawl');
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
      console.log('fabric name: ', selectedFabricName);
      setFabricURL(selectedFabricName);
  
      if (selectedFabricName) {
        eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
      }
      console.log('fabric url: ', fabricURL);
  
    }, [selectedShawl, fabricURL]);
    useEffect(()=>{
      const selectedbuttonurl=localStorage.getItem('ButtonURL')
      console.log("button name:",selectedbuttonurl);
      setButtonTextureURL(selectedbuttonurl)
      if(selectedbuttonurl){
        eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    }
      
    },[selectedShawl, buttonTextureURL])

    useEffect(() => {
      localStorage.setItem('selectedShawl', selectedShawl);
    }, [selectedShawl]);
  
   useEffect(() => {
      const savedshawl = localStorage.getItem('selectedShawl');
      if (savedshawl) {
        setSelectedShawl(savedshawl);
      }
    }, []); 
    useEffect(() => {
        const handleShawlChange = (shawlType) => {
            setSelectedShawl(shawlType);
            setTargetPosition(new Vector3(0, 3, 0));

            // Emit the applyFabric event with the current fabric URL when the waistband changes
       
        };

        const singleBtn = document.getElementById('shawl_single');
        const doubleBtn = document.getElementById('shawl_double');

        singleBtn.addEventListener('click', () => handleShawlChange('single'));
        doubleBtn.addEventListener('click', () => handleShawlChange('double'));

        return () => {
            singleBtn.removeEventListener('click', () => handleShawlChange('single'));
            doubleBtn.removeEventListener('click', () => handleShawlChange('double'));
        };
    }, []);

    useEffect(() => {
        setSelectedShawl(defaultShawl); // Update selected peak when defaultPeak changes
    }, [defaultShawl]);

    // Conditional rendering based on selectedComponent and collarType
    // console.log('peak',collarType, selectedShawl);
    
    return (
        <>
            {/* {selectedComponent === 'Classic' && collarType === 'peak' || selectedPeak === 'double' &&<Peakdoublebtn />}
            {selectedComponent === 'Breasted' && collarType === 'peak' || selectedPeak === 'breasted' &&<Peakdoublebreasted />} */}

            {selectedShawl === 'single'  &&    (
              <>
              <Shawlsingle />
              <Shawlbutton/>
              </>
            )}
            {selectedShawl === 'double' &&    (<>
            <Shawldouble />
            <Shawlbutton/>
            </>)}
            
        </>
    );
};

export default ShawlSelector;
