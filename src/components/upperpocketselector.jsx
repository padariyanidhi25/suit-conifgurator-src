import React, { useState, useEffect } from 'react';
import { Flap_Pocket, Patch_Pocket, Besom_Pocket, Upperpocket, Halfmoon,  } from "./pockets";
import eventEmitter from './eventEmitter';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';

const UpperpocketSelector = () => {
    const [selectedUpperPocket, setSelectedUpperPocket] = useState('upper');
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
      const handleConfirmUpperPocketClick = () => {
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
        confrmlapelBtn.addEventListener('click', handleConfirmUpperPocketClick);
      }
  
      return () => {
        if (confrmlapelBtn) {
          confrmlapelBtn.removeEventListener('click', handleConfirmUpperPocketClick);
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
      console.log('fabric name: ', selectedFabricName);
      setFabricURL(selectedFabricName);
  
      if (selectedFabricName) {
        eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
      }
      console.log('fabric url: ', fabricURL);
  
    }, [selectedUpperPocket, fabricURL]);

      useEffect(() => {
        localStorage.setItem('selectedUpperPocket', selectedUpperPocket);
      }, [selectedUpperPocket]);
    
     useEffect(() => {
        const savedUpperPocket = localStorage.getItem('selectedUpperPocket');
        if (savedUpperPocket) {
          setSelectedUpperPocket(savedUpperPocket);
        }
      }, []);
    useEffect(() => {
        const handleUpperPocketChange = (pocketType) => {
            setSelectedUpperPocket(pocketType);
            setTargetPosition(new Vector3(0, 6, -5));

             // Emit the applyFabric event with the current fabric URL when the waistband changes
       if (fabricURL) {
        eventEmitter.emit('applyFabric', { textureURL: fabricURL });
      }
        };
        

        document.getElementById('uppr-pocket').addEventListener('click', () => {
            handleUpperPocketChange('upper');
        });
        document.getElementById('half-pocket').addEventListener('click', () => {
            handleUpperPocketChange('halfmoon');
        });
      //   document.getElementById('patch-pocket-upper').addEventListener('click', () => {
      //     handleUpperPocketChange('patch_U');
      // });

        return () => {
              document.getElementById('uppr-pocket').removeEventListener('click', handleUpperPocketChange);
            document.getElementById('half-pocket').removeEventListener('click', handleUpperPocketChange);
            // document.getElementById('patch-pocket-upper').removeEventListener('click', handleUpperPocketChange);

        };
    }, []);

    return (
        <>
            
            {selectedUpperPocket === 'upper' && <Upperpocket />}
            {selectedUpperPocket === 'halfmoon' && <Halfmoon />}
            {/* {selectedUpperPocket === 'patch_U' && <Patch_Pocket_Upper />} */}
        </>
    );
};

export default UpperpocketSelector;
