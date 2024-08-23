import React, { useState, useEffect } from 'react';
import { Flap_Pocket, Patch_Pocket, Besom_Pocket, Upperpocket, Halfmoon, Patch_Pocket_Upper } from "./pockets";
import eventEmitter from './eventEmitter';

const UpperpocketSelector = () => {
    const [selectedUpperPocket, setSelectedUpperPocket] = useState('upper');
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
      }, [selectedUpperPocket, fabricURL]);
    useEffect(() => {
        const handleUpperPocketChange = (pocketType) => {
            setSelectedUpperPocket(pocketType);
        };
        

        document.getElementById('uppr-pocket').addEventListener('click', () => {
            handleUpperPocketChange('upper');
        });
        document.getElementById('half-pocket').addEventListener('click', () => {
            handleUpperPocketChange('halfmoon');
        });
        document.getElementById('patch-pocket-upper').addEventListener('click', () => {
          handleUpperPocketChange('patch_U');
      });

        return () => {
              document.getElementById('uppr-pocket').removeEventListener('click', handleUpperPocketChange);
            document.getElementById('half-pocket').removeEventListener('click', handleUpperPocketChange);
            document.getElementById('patch-pocket-upper').removeEventListener('click', handleUpperPocketChange);

        };
    }, []);

    return (
        <>
            
            {selectedUpperPocket === 'upper' && <Upperpocket />}
            {selectedUpperPocket === 'halfmoon' && <Halfmoon />}
            {selectedUpperPocket === 'patch_U' && <Patch_Pocket_Upper />}
        </>
    );
};

export default UpperpocketSelector;
