import React, { useState, useEffect } from 'react';
import { Flap_Pocket, Patch_Pocket, Besom_Pocket, Upperpocket, Halfmoon } from "./pockets";
import eventEmitter from './eventEmitter';

const PocketSelector = () => {
    const [selectedLowerPocket, setSelectedLowerPocket] = useState('flap'); // Default to 'flap'
    const [selectedUpperPocket, setSelectedUpperPocket] = useState(null);
    const [fabricURL, setFabricURL] = useState(null);

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
      }, [selectedLowerPocket, fabricURL]);
    useEffect(() => {
        const handleLowerPocketChange = (pocketType) => {
            setSelectedLowerPocket(pocketType);
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
