import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { PeakwideBreasted, PeakwideDouble, PeakWidesingle } from './peakwide';
import { Breastedbutton, Doublebutton, Singlebutton } from './buttonglb';
import { AmfPeakbreasted2mm, AmfPeakbreasted6mm, AmfPeakDoublebtn2mmWide, AmfPeakDoublebtn6mmWide, AmfPeaksinglebtn2mm, AmfPeaksinglebtn2mmWide, AmfPeaksinglebtn6mmWide } from './amfpeak';

const PeakWideSelector = ({ defaultwidePeak, collarType, selectedComponent }) => {
    const [selectedwidePeak, setSelectedwidePeak] = useState(defaultwidePeak);
    const [fabricURL, setFabricURL] = useState(null);
    const [buttonTextureURL, setButtonTextureURL] = useState(null);
    const [is2mmSelected, setIs2mmSelected] = useState(false);
    const [is6mmSelected, setIs6mmSelected] = useState(false);
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

    useEffect(() => {
      const handleConfirmAmfClick = () => {
        // Set the camera back to its original position
        setTargetPosition(new Vector3(0, 3.25, 8));
  
    
      };
  
      const confrmamfBtn = document.getElementById("confrmamf");
      if (confrmamfBtn) {
        confrmamfBtn.addEventListener("click", handleConfirmAmfClick);
      }
  
      return () => {
        if (confrmamfBtn) {
          confrmamfBtn.removeEventListener("click", handleConfirmAmfClick);
        }
      };
    }, []);

    useEffect(() => {
      const handle2mmClick = () => {
        setIs2mmSelected(true);
        setIs6mmSelected(false); // Unselect 6mm when 2mm is selected
        setTargetPosition(new Vector3(0, 5, 2));

      };
  
      const element2mm = document.getElementById("2mm");
      if (element2mm) {
        element2mm.addEventListener("click", handle2mmClick);
      }
  
      return () => {
        if (element2mm) {
          element2mm.removeEventListener("click", handle2mmClick);
        }
      };
    }, []);
  
    useEffect(() => {
      const handle6mmClick = () => {
        setIs6mmSelected(true);
        setIs2mmSelected(false); // Unselect 2mm when 6mm is selected
        setTargetPosition(new Vector3(0, 5, 2));

      };
  
      const element6mm = document.getElementById("6mm");
      if (element6mm) {
        element6mm.addEventListener("click", handle6mmClick);
      }
  
      return () => {
        if (element6mm) {
          element6mm.removeEventListener("click", handle6mmClick);
        }
      };
    }, []);

    useEffect(() => {
      const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
      setFabricURL(selectedFabricName);
  
      if (selectedFabricName) {
        eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
      }
  
    }, [selectedwidePeak, fabricURL]);
    useEffect(()=>{
      const selectedbuttonurl=localStorage.getItem('ButtonURL')
      setButtonTextureURL(selectedbuttonurl)
      if(selectedbuttonurl){
        eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    }
      
    },[selectedwidePeak, buttonTextureURL])

    useEffect(() => {
      localStorage.setItem('selectedwidePeak', selectedwidePeak);
    }, [selectedwidePeak]);
  
   useEffect(() => {
      const savedPeak = localStorage.getItem('selectedwidePeak');
      if (savedPeak) {
        setSelectedwidePeak(savedPeak);
      }
    }, []); 
    useEffect(() => {
        const handlePeakwideChange = (peakType) => {
          setSelectedwidePeak(peakType);
            setTargetPosition(new Vector3(0, 3, 0));

            // Emit the applyFabric event with the current fabric URL when the waistband changes
            if (fabricURL) {
              eventEmitter.emit("applyFabric", { textureURL: fabricURL });
            }
       
        };

        const singleBtn = document.getElementById('single_btn');
        const doubleBtn = document.getElementById('double_btn');
        const doubleBreastedBtn = document.getElementById('doublebreasted');

        singleBtn.addEventListener('click', () => handlePeakwideChange('single'));
        doubleBtn.addEventListener('click', () => handlePeakwideChange('double'));
        doubleBreastedBtn.addEventListener('click', () => handlePeakwideChange('breasted'));

        return () => {
            singleBtn.removeEventListener('click', () => handlePeakwideChange('single'));
            doubleBtn.removeEventListener('click', () => handlePeakwideChange('double'));
            doubleBreastedBtn.removeEventListener('click', () => handlePeakwideChange('breasted'));
        };
    }, []);

    useEffect(() => {
      setSelectedwidePeak(defaultwidePeak); // Update selected peak when defaultPeak changes
    }, [defaultwidePeak]);
    useEffect(() => {
      if (fabricURL) {
        eventEmitter.emit("applyFabric", { textureURL: fabricURL });
      }
    }, [is2mmSelected, is6mmSelected]);
    // Conditional rendering based on selectedComponent and collarType
    
    return (
        <>
            {/* {selectedComponent === 'Classic' && collarType === 'peak' || selectedPeak === 'double' &&<Peakdoublebtn />}
            {selectedComponent === 'Breasted' && collarType === 'peak' || selectedPeak === 'breasted' &&<Peakdoublebreasted />} */}

            {selectedwidePeak === 'single'  &&  collarType === 'peakwide' && (<>
            <PeakWidesingle />
            <Singlebutton/>
            {/* <PeakwideKaaj/> */}
            {is2mmSelected &&<AmfPeaksinglebtn2mmWide/>}
         {is6mmSelected&&<AmfPeaksinglebtn6mmWide/>}
            </>)}
            {selectedwidePeak === 'double' &&  collarType === 'peakwide' && (<>
            <PeakwideDouble />
            <Doublebutton/>
            {/* <PeakwideKaaj/> */}

            {is2mmSelected &&<AmfPeakDoublebtn2mmWide/>}
            {is6mmSelected&&<AmfPeakDoublebtn6mmWide/>}
            </>)}
            {selectedwidePeak === 'breasted'  &&  collarType === 'peakwide' && (
                <>
                <PeakwideBreasted />
                <Breastedbutton/>
                {/* <PeakwideKaaj/> */}

                {is2mmSelected &&<AmfPeakbreasted2mm/>}
                {is6mmSelected&&<AmfPeakbreasted6mm/>}
                </>)}
        </>
    );
};

export default PeakWideSelector;
