import React, { useState, useEffect } from 'react';
import eventEmitter from './eventEmitter';
import { Pocket_jeted, Pocket_seam, Pocket_standard } from './trouserpocket';

const TrouserPocketSelector = () => {
    const [selectedtrouserpocket, setSelectedtrouserpocket] = useState('jetted'); 
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
        const handlePockettChange = (PockettType) => {
          setSelectedtrouserpocket(PockettType);
        };

        const jeted = document.getElementById('jetted');
        const seam = document.getElementById('seam');
        const slanted = document.getElementById('slanted');
       

        jeted.addEventListener('click', () => handlePockettChange('jetted'));
        seam.addEventListener('click', () => handlePockettChange('seam'));
        slanted.addEventListener('click', () => handlePockettChange('slanted'));
        


        return () => {
            jeted.removeEventListener('click', () => handlePockettChange('jetted'));
            seam.removeEventListener('click', () => handlePockettChange('seam'));
            slanted.removeEventListener('click', () => handlePockettChange('slanted'));
           

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
