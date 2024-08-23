import React, { useState, useEffect } from 'react';
import { Notch_Collar, Peak_Collor } from './collar';
import eventEmitter from './eventEmitter';

const CollarSelector = () => {
  const [selectedCollar, setSelectedCollar] = useState('notch');
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
  }, [selectedCollar, fabricURL]);

  useEffect(() => {
    const handleCollarChange = (collarType) => {
      setSelectedCollar(collarType);
    };

    document.getElementById('notch_collar').addEventListener('click', () => {
      handleCollarChange('notch');
    });
    document.getElementById('peak_collar').addEventListener('click', () => {
      handleCollarChange('peak');
    });

    return () => {
      document.getElementById('notch_collar').removeEventListener('click', handleCollarChange);
      document.getElementById('peak_collar').removeEventListener('click', handleCollarChange);
    };
  }, []);

  return (
    <>
      {selectedCollar === 'notch' && <Notch_Collar />}
      {selectedCollar === 'peak' && <Peak_Collor />}
    </>
  );
};

export default CollarSelector;
