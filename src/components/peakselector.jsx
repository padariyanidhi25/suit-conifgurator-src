import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';

const PeakSelector = ({ defaultPeak, collarType, selectedComponent }) => {
    const [selectedPeak, setSelectedPeak] = useState(defaultPeak);
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
    }, [selectedPeak, fabricURL]);

    useEffect(() => {
        const handlePeakChange = (peakType) => {
            setSelectedPeak(peakType);
            // console.log('peak',peakType);
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
            {selectedComponent === 'Classic' && collarType === 'peak' || selectedPeak === 'double' &&<Peakdoublebtn />}
            {selectedComponent === 'Breasted' && collarType === 'peak' || selectedPeak === 'breasted' &&<Peakdoublebreasted />}

            {selectedPeak === 'single'  &&  collarType === 'peak' && <Peaksinglebtn />}
            {selectedPeak === 'double' &&  collarType === 'peak' && <Peakdoublebtn />}
            {selectedPeak === 'breasted'  &&  collarType === 'peak' && <Peakdoublebreasted />}
        </>
    );
};

export default PeakSelector;
