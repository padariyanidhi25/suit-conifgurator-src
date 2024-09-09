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
    
          // Remove 'active' class from all pockets
          document.getElementById('jetted').classList.remove('active');
          document.getElementById('seam').classList.remove('active');
          document.getElementById('slanted').classList.remove('active');
    
          // Add 'active' class to the selected pocket
          document.getElementById(PocketType).classList.add('active');
        };
    
        document.getElementById('jetted').addEventListener('click', () => handlePocketChange('jetted'));
        document.getElementById('seam').addEventListener('click', () => handlePocketChange('seam'));
        document.getElementById('slanted').addEventListener('click', () => handlePocketChange('slanted'));
    
        return () => {
          document.getElementById('jetted').removeEventListener('click', () => handlePocketChange('jetted'));
          document.getElementById('seam').removeEventListener('click', () => handlePocketChange('seam'));
          document.getElementById('slanted').removeEventListener('click', () => handlePocketChange('slanted'));
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
