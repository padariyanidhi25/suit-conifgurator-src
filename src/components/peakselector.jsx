import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Breastedbutton, Doublebutton, Singlebutton } from './buttonglb';
import { AmfPeakbreasted2mm, AmfPeakbreasted6mm, AmfPeakDoublebtn2mm, AmfPeakDoublebtn6mm, AmfPeaksinglebtn2mm, AmfPeaksinglebtn6mm } from './amfpeak';

const PeakSelector = ({ defaultPeak, collarType, selectedComponent }) => {
    const [selectedPeak, setSelectedPeak] = useState(defaultPeak);
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
  
    // Load initial fabric URL from localStorage
    useEffect(() => {
        const selectedFabricUrl = localStorage.getItem("selectedFabricURL");
        // console.log("Initial fabric URL:", selectedFabricUrl);
        if (selectedFabricUrl) {
            setFabricURL(selectedFabricUrl);
            setTimeout(() => {
                eventEmitter.emit("applyFabric", { textureURL: selectedFabricUrl });
            }, 100);
        }
    }, []);

    // Listen for fabric changes
    useEffect(() => {
        const handleFabricChange = () => {
            const selectedFabricUrl = localStorage.getItem("selectedFabricURL");
            console.log("Fabric changed:", selectedFabricUrl);
            if (selectedFabricUrl) {
                setFabricURL(selectedFabricUrl);
                eventEmitter.emit("applyFabric", { textureURL: selectedFabricUrl });
            }
        };

        window.addEventListener("storage", handleFabricChange);
        return () => window.removeEventListener("storage", handleFabricChange);
    }, []);

    // Apply fabric when peak type changes
    useEffect(() => {
        if (fabricURL) {
            // console.log("Applying fabric on peak change:", fabricURL);
            eventEmitter.emit("applyFabric", { textureURL: fabricURL });
        }
    }, [selectedPeak, fabricURL]);

    const applyFabricTexture = () => {
        if (fabricURL) {
            eventEmitter.emit("applyFabric", { textureURL: fabricURL });
        }
    };

    useEffect(() => {
        const handlePeakChange = (peakType) => {
            setSelectedPeak(peakType);
            setTargetPosition(new Vector3(0, 3, 0));
            const currentFabric = localStorage.getItem("selectedFabricURL");
            console.log("Applying fabric on peak type change:", currentFabric);
            if (currentFabric) {
                eventEmitter.emit("applyFabric", { textureURL: currentFabric });
            }
        };

        const singleBtn = document.getElementById('single_btn');
        const doubleBtn = document.getElementById('double_btn');
        const doubleBreastedBtn = document.getElementById('doublebreasted');

        if (singleBtn && doubleBtn && doubleBreastedBtn) {
            const handleSingle = () => handlePeakChange('single');
            const handleDouble = () => handlePeakChange('double');
            const handleBreasted = () => handlePeakChange('breasted');

            singleBtn.addEventListener('click', handleSingle);
            doubleBtn.addEventListener('click', handleDouble);
            doubleBreastedBtn.addEventListener('click', handleBreasted);

            return () => {
                singleBtn.removeEventListener('click', handleSingle);
                doubleBtn.removeEventListener('click', handleDouble);
                doubleBreastedBtn.removeEventListener('click', handleBreasted);
            };
        }
    }, []);

    useEffect(() => {
        const handle2mmClick = () => {
            setIs2mmSelected(true);
            setIs6mmSelected(false);
            applyFabricTexture();
            setTargetPosition(new Vector3(0, 5, 2));
        };

        const element2mm = document.getElementById("2mm");
        if (element2mm) {
            element2mm.addEventListener("click", handle2mmClick);
            return () => element2mm.removeEventListener("click", handle2mmClick);
        }
    }, [fabricURL]);

    useEffect(() => {
        const handle6mmClick = () => {
            setIs6mmSelected(true);
            setIs2mmSelected(false);
            applyFabricTexture();
            setTargetPosition(new Vector3(0, 5, 2));
        };

        const element6mm = document.getElementById("6mm");
        if (element6mm) {
            element6mm.addEventListener("click", handle6mmClick);
            return () => element6mm.removeEventListener("click", handle6mmClick);
        }
    }, [fabricURL]);

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
        localStorage.setItem('selectedPeak', selectedPeak);
    }, [selectedPeak]);

    useEffect(() => {
        const savedPeak = localStorage.getItem('selectedPeak');
        if (savedPeak) {
            setSelectedPeak(savedPeak);
        }
    }, []);

    useEffect(()=>{
        const selectedbuttonurl=localStorage.getItem('ButtonURL')
        // console.log("button name:",selectedbuttonurl);
        setButtonTextureURL(selectedbuttonurl)
        if(selectedbuttonurl){
            eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    
        }
        
    },[selectedPeak, buttonTextureURL])

    useEffect(() => {
        setSelectedPeak(defaultPeak); // Update selected peak when defaultPeak changes
    }, [defaultPeak]);

    return (
        <>
            {selectedPeak === 'single' && collarType === 'peak' && (
                <>
                    <Peaksinglebtn  />
                    <Singlebutton/>
                    {is2mmSelected &&<AmfPeaksinglebtn2mm />}
                    {is6mmSelected&&<AmfPeaksinglebtn6mm />}
                </>
            )}
            {selectedPeak === 'double' && collarType === 'peak' && (
                <>
                    <Peakdoublebtn  />
                    <Doublebutton/>
                    {is2mmSelected &&<AmfPeakDoublebtn2mm />}
                    {is6mmSelected&&<AmfPeakDoublebtn6mm />}
                </>
            )}
            {selectedPeak === 'breasted' && collarType === 'peak' && (
                <>
                    <Peakdoublebreasted  />
                    <Breastedbutton/>
                    {is2mmSelected &&<AmfPeakbreasted2mm />}
                    {is6mmSelected&&<AmfPeakbreasted6mm />}
                </>
            )}
        </>
    );
};

export default PeakSelector;