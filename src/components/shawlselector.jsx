import React, { useState, useEffect } from 'react';
import { Vector3 } from "three";
import { useThree, useFrame } from '@react-three/fiber';
import { Shawldouble, Shawlsingle } from './shawl';
import { Shawlbutton } from './buttonglb';
import eventEmitter from './eventEmitter';

const ShawlSelector = ({ defaultShawl = 'wide' }) => {
    const [selectedShawl, setSelectedShawl] = useState(localStorage.getItem('selectedShawl') || defaultShawl);
    const [fabricURL, setFabricURL] = useState(null);
    const [buttonTextureURL, setButtonTextureURL] = useState(null);
    const [targetPosition, setTargetPosition] = useState(new Vector3(0, 3.25, 8)); // Default camera position
    const { camera } = useThree(); // Access the camera
    const lerpSpeed = 0.05; // Speed for camera transition

    // Smooth camera transition
    useFrame(() => {
        camera.position.lerp(targetPosition, lerpSpeed);
    });

    // Reset camera position and UI on 'confirmshawl' button click
    useEffect(() => {
        const handleConfirmShawlClick = () => {
            setTargetPosition(new Vector3(0, 3.25, 8));
            document.getElementById('lapelContent').style.display = 'none';
            document.getElementById('lapel-option').style.display = 'none';
            document.getElementById('lapel-width').style.display = 'none';
            document.getElementById('lapel-buttonhole').style.display = 'none';
            document.getElementById('confirmlapel').style.display = 'none';
            document.getElementById('monogrm').style.display = 'flex';
        };

        const confirmShawlBtn = document.getElementById('confrmshawl');
        if (confirmShawlBtn) {
            confirmShawlBtn.addEventListener('click', handleConfirmShawlClick);
        }

        return () => {
            if (confirmShawlBtn) {
                confirmShawlBtn.removeEventListener('click', handleConfirmShawlClick);
            }
        };
    }, []);

    // Fetch fabric and button textures from localStorage
    useEffect(() => {
        const selectedFabricName = localStorage.getItem("selectedFabricURL");
        setFabricURL(selectedFabricName);

        if (selectedFabricName) {
            eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
        }
    }, [selectedShawl]);

    useEffect(() => {
        const selectedButtonURL = localStorage.getItem('ButtonURL');
        setButtonTextureURL(selectedButtonURL);

        if (selectedButtonURL) {
            eventEmitter.emit("applyButtonTexture", { textureURL: selectedButtonURL });
        }
    }, [selectedShawl]);

    // Persist selected shawl in localStorage
    useEffect(() => {
        localStorage.setItem('selectedShawl', selectedShawl);
    }, [selectedShawl]);

    // Restore selected shawl from localStorage on load
    useEffect(() => {
        const savedShawl = localStorage.getItem('selectedShawl');
        if (savedShawl) {
            setSelectedShawl(savedShawl);
        }
    }, []);

    // Handle shawl change events
    useEffect(() => {
        const handleShawlChange = (shawlType) => {
            setSelectedShawl(shawlType);
            setTargetPosition(new Vector3(0, 3, 0));
            if (fabricURL) {
                eventEmitter.emit("applyFabric", { textureURL: fabricURL });
            }
        };

        const singleBtn = document.getElementById('shawl_single');
        const doubleBtn = document.getElementById('shawl_double');

        const handleSingleClick = () => handleShawlChange('wide');
        const handleDoubleClick = () => handleShawlChange('single');

        singleBtn.addEventListener('click', handleSingleClick);
        doubleBtn.addEventListener('click', handleDoubleClick);

        return () => {
            singleBtn.removeEventListener('click', handleSingleClick);
            doubleBtn.removeEventListener('click', handleDoubleClick);
        };
    }, [fabricURL]);

    // Debugging log for selectedShawl
    useEffect(() => {
        // console.log('Selected Shawl:', selectedShawl);
    }, [selectedShawl]);

    return (
        <>
            {selectedShawl === 'wide' && (
                <>
                    <Shawlsingle />
                    <Shawlbutton />
                </>
            )}
            {selectedShawl === 'single' && (
                <>
                    <Shawldouble />
                    <Shawlbutton />
                </>
            )}
        </>
    );
};

export default ShawlSelector;
