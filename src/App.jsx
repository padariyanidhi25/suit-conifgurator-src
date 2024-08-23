import React, { useState, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { getEntries } from "./Firebase/userUtil";
import eventEmitter from "./components/eventEmitter";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from "three";

function RectAreaLightComponent({ position, rotation, intensity, width, height, targetPosition }) {
  const lightRef = useRef();

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.lookAt(new Vector3(...targetPosition));
      lightRef.current.updateMatrixWorld();
    }
  }, [targetPosition]);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.lookAt(new Vector3(...targetPosition));
      lightRef.current.updateMatrixWorld();
    }
  });

  return (
    <rectAreaLight
      ref={lightRef}
      position={position}
      rotation={rotation}
      intensity={intensity}
      width={width}
      height={height}
    />
  );
}

function App() {
  const [showFirstCanvas, setShowFirstCanvas] = useState(true);
  const [fabricPrice, setFabricPrice] = useState(0);
  const [buttonPrice, setButtonPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCanvas = () => {
    setShowFirstCanvas((prev) => !prev);
  };

  useEffect(() => {
    getEntries()
      .then((result) => {
        // Process your results here if needed
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const handleButtonSelected = ({ price }) => {
      setButtonPrice(Number(price) || 0);
    };

    const handleFabricSelected = ({ price }) => {
      setFabricPrice(Number(price) || 0);
    };

    eventEmitter.on('buttonSelected', handleButtonSelected);
    eventEmitter.on('fabricSelected', handleFabricSelected);

    return () => {
      eventEmitter.off('buttonSelected', handleButtonSelected);
      eventEmitter.off('fabricSelected', handleFabricSelected);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(buttonPrice + fabricPrice);
  }, [buttonPrice, fabricPrice]);

  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const targetPosition = [0,0,0];
  return (
    <>
      <CustomizationProvider>
        <div className="App">
          {/* First Canvas */}
          {showFirstCanvas && (
            <Canvas>
              <PerspectiveCamera
                makeDefault={true}
                far={1000}
                near={0.1}
                fov={22.895}
                position={[0, 0.05, 0.334]}
              />
              
              <RectAreaLightComponent 
                position={[0.468164, -0.022108, 0.921883]} 
                rotation={[
                  toRadians(3.31184),
                  toRadians(64.1682),
                  toRadians(-18.401),
                ]}
                intensity={1}
                width={10}
                height={10}
                targetPosition={targetPosition} // Targeting the model position
              />
              
              {/* Right-side RectAreaLight */}
              {/* <RectAreaLightComponent
                position={[-0.352444, -0.25606, 0.029522]}
                rotation={[
                  toRadians(0.000013),
                  toRadians(67.8842),
                  toRadians(-142.782),
                ]}
                intensity={1}
                width={10}
                height={10}
                targetPosition={targetPosition} // Targeting the model position
              /> */}

              <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
            </Canvas>
          )}

          {/* Second Canvas */}
          {!showFirstCanvas && (
            <Canvas>
              <PerspectiveCamera
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={22.895}
                position={[0, 0.162, 0.334]}
              />
              <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
            </Canvas>
          )}

          {/* Configurator */}
          <Configurator />

          {/* Div to display the total price */}
          <div className="storeprice absolute text-black z-[9] left-[2vw] top-[5vh] w-[5vw] h-[5vh] xs:w-[22vw] text-nowrap xs:left-1 xs:top-0 flex items-center justify-center">
            Total: ${Number(totalPrice).toFixed(2)}
          </div>
          <p className="absolute top-20 left-6 text-sm xs:top-7 xs:left-1">2-3 weeks delivery</p>
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
