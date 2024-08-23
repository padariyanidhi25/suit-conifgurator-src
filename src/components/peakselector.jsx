import React, { useState, useEffect } from 'react';
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from './peakoption';
import eventEmitter from './eventEmitter';

const PeakSelector = ({ defaultPeak }) => {
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
            console.log(peakType);
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

    return (
        <>
            {selectedPeak === 'single' && <Peaksinglebtn />}
            {selectedPeak === 'double' && <Peakdoublebtn />}
            {selectedPeak === 'breasted' && <Peakdoublebreasted />}
        </>
    );
};

export default PeakSelector;
