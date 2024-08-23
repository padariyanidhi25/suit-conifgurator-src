import React, { useState, useEffect } from 'react';
import { Nochdoublebrested, Notchdoublebtn, Notchsinglebtn } from './notchoption';
import eventEmitter from './eventEmitter';

const NotchSelector = ({ defaultNotch }) => {
    const [selectedNotch, setSelectedNotch] = useState(defaultNotch);
    const [fabricURL, setFabricURL] = useState(null);
    const [buttonTextureURL, setButtonTextureURL] = useState(null);

    // Listen for fabric selection and update the fabric URL state
    useEffect(() => {
        const handleFabricSelection = (fabric) => {
            setFabricURL(fabric.textureURL);
        };
        eventEmitter.on('fabricSelected', handleFabricSelection);
        return () => {
            eventEmitter.off('fabricSelected', handleFabricSelection);
        };
    }, []);

    // Listen for button texture selection and update the button texture URL state
    useEffect(() => {
        const handleButtonTextureSelection = (textureURL) => {
            setButtonTextureURL(textureURL);
            
        };
        eventEmitter.on('buttonSelected', handleButtonTextureSelection);
        
        return () => {
            eventEmitter.off('buttonSelected', handleButtonTextureSelection);
        };
    }, []);

    // Apply fabric texture when either fabric URL or selected notch changes
    useEffect(() => {
        if (fabricURL) {
            eventEmitter.emit('applyFabric', { textureURL: fabricURL });
        }
    }, [selectedNotch, fabricURL]);

    // Apply button texture when selected notch changes
    useEffect(() => {
        if (buttonTextureURL) {
            eventEmitter.emit('applyButtonTexture', { textureURL: buttonTextureURL });
        }
    }, [selectedNotch, buttonTextureURL]);

    // Handle notch changes and apply button texture
    useEffect(() => {
        const handleNotchChange = (notchType) => {
            setSelectedNotch(notchType);
            if (buttonTextureURL) {
                eventEmitter.emit('applyButtonTexture', { textureURL: buttonTextureURL });
            }
        };

        document.getElementById('single_btn').addEventListener('click', () => handleNotchChange('single'));
        document.getElementById('double_btn').addEventListener('click', () => handleNotchChange('double'));
        document.getElementById('doublebreasted').addEventListener('click', () => handleNotchChange('breasted'));

        return () => {
            document.getElementById('single_btn').removeEventListener('click', handleNotchChange);
            document.getElementById('double_btn').removeEventListener('click', handleNotchChange);
            document.getElementById('doublebreasted').removeEventListener('click', handleNotchChange);
        };
    }, [buttonTextureURL]);

    // Update selected notch when defaultNotch changes
    useEffect(() => {
        setSelectedNotch(defaultNotch);
    }, [defaultNotch]);

    return (
        <>
            {selectedNotch === 'single' && <Notchsinglebtn />}
            {selectedNotch === 'double' && <Notchdoublebtn />}
            {selectedNotch === 'breasted' && <Nochdoublebrested />}
        </>
    );
};

export default NotchSelector;
