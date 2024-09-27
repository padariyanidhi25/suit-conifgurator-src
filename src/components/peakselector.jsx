import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';

const PeakSelector = ({ defaultPeak, collarType, selectedComponent }) => {
    const [selectedPeak, setSelectedPeak] = useState(defaultPeak);
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
  
      const confrmlapelBtn = document.getElementById('confrmclosure');
      if (confrmlapelBtn) {
        confrmlapelBtn.addEventListener('click', handleConfirmLapelClick);
      }
  
      return () => {
        if (confrmlapelBtn) {
          confrmlapelBtn.removeEventListener('click', handleConfirmLapelClick);
        }
      };
    }, []);

    // useEffect(() => {
    //     const handleFabricSelection = (fabric) => {
    //         setFabricURL(fabric.textureURL);
    //     };

    //     eventEmitter.on('fabricSelected', handleFabricSelection);

    //     return () => {
    //         eventEmitter.off('fabricSelected', handleFabricSelection);
    //     };
    // }, []);
    // useEffect(() => {
    //   const handleButtonTextureSelection = (textureURL) => {
    //     setButtonTextureURL(textureURL);
    //   };
    //   eventEmitter.on('buttonSelected', handleButtonTextureSelection);
    //   return () => {
    //     eventEmitter.off('buttonSelected', handleButtonTextureSelection);
    //   };
    // }, []);

    useEffect(() => {
      const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
      console.log('fabric name: ', selectedFabricName);
      setFabricURL(selectedFabricName);
  
      if (selectedFabricName) {
        eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
      }
      console.log('fabric url: ', fabricURL);
  
    }, [selectedPeak, fabricURL]);
    useEffect(()=>{
      const selectedbuttonurl=localStorage.getItem('ButtonURL')
      console.log("button name:",selectedbuttonurl);
      setButtonTextureURL(selectedbuttonurl)
      if(selectedbuttonurl){
        eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    }
      
    },[selectedPeak, buttonTextureURL])

    useEffect(() => {
      localStorage.setItem('selectedPeak', selectedPeak);
    }, [selectedPeak]);
  
   useEffect(() => {
      const savedPeak = localStorage.getItem('selectedPeak');
      if (savedPeak) {
        setSelectedPeak(savedPeak);
      }
    }, []); 
    useEffect(() => {
        const handlePeakChange = (peakType) => {
            setSelectedPeak(peakType);
            setTargetPosition(new Vector3(0, 3, 0));

            // Emit the applyFabric event with the current fabric URL when the waistband changes
       
        };

        const singleBtn = document.getElementById('single_btn');
        const doubleBtn = document.getElementById('double_btn');
        const doubleBreastedBtn = document.getElementById('doublebreasted');

        singleBtn.addEventListener('click', () => handlePeakChange('single'));
        doubleBtn.addEventListener('click', () => handlePeakChange('double'));
        doubleBreastedBtn.addEventListener('click', () => handlePeakChange('breasted'));

        return () => {
            singleBtn.removeEventListener('click', () => handlePeakChange('single'));
            doubleBtn.removeEventListener('click', () => handlePeakChange('double'));
            doubleBreastedBtn.removeEventListener('click', () => handlePeakChange('breasted'));
        };
    }, []);

    useEffect(() => {
        setSelectedPeak(defaultPeak); // Update selected peak when defaultPeak changes
    }, [defaultPeak]);

    // Conditional rendering based on selectedComponent and collarType
    console.log('peak',collarType, selectedPeak);
    
    return (
        <>
            {/* {selectedComponent === 'Classic' && collarType === 'peak' || selectedPeak === 'double' &&<Peakdoublebtn />}
            {selectedComponent === 'Breasted' && collarType === 'peak' || selectedPeak === 'breasted' &&<Peakdoublebreasted />} */}

            {selectedPeak === 'single'  &&  collarType === 'peak' && <Peaksinglebtn />}
            {selectedPeak === 'double' &&  collarType === 'peak' && <Peakdoublebtn />}
            {selectedPeak === 'breasted'  &&  collarType === 'peak' && <Peakdoublebreasted />}
        </>
    );
};

export default PeakSelector;
