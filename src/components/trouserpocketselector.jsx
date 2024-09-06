import React, { useState, useEffect } from 'react';
import eventEmitter from './eventEmitter';
import { Pocket_jeted, Pocket_seam, Pocket_standard } from './trouserpocket';

const TrouserPocketSelector = () => {
    const [selectedtrouserpocket, setSelectedtrouserpocket] = useState('jetted'); // Default to 'flap'
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
      }, [selectedtrouserpocket, fabricURL]);

    useEffect(() => {
        const handlePocketChange = (PocketType) => {
            setSelectedtrouserpocket(PocketType);
        };

        const jeted = document.getElementById('jetted');
        const seam = document.getElementById('seam');
        const slanted = document.getElementById('slanted');
       

        jeted.addEventListener('click', () => handlePocketChange('jetted'));
        seam.addEventListener('click', () => handlePocketChange('seam'));
        slanted.addEventListener('click', () => handlePocketChange('slanted'));
        


        return () => {
            jeted.removeEventListener('click', () => handlePocketChange('jetted'));
            seam.removeEventListener('click', () => handlePocketChange('seam'));
            slanted.removeEventListener('click', () => handlePocketChange('slanted'));
           

        };
    }, []);

    return (
        <>
            {selectedtrouserpocket === 'jetted' && <Pocket_jeted/>}
            {selectedtrouserpocket === 'seam' && <Pocket_seam/>}
            {selectedtrouserpocket === 'slanted' && <Pocket_standard />}
           
        </>
    );
};

export default TrouserPocketSelector;
