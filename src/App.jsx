import React, { useState, useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import { DirectionalLightHelper } from "three";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { getEntries } from "./Firebase/userUtil";
import eventEmitter from "./components/eventEmitter";

function DirectionalLightWithHelper({ position, color, intensity, targetPosition }) {
  const lightRef = useRef();
  const targetRef = useRef();

  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={position}
        intensity={intensity}
        color={color}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        // shadow-bias={-0.0002}
        
      />
      <mesh ref={targetRef} position={targetPosition} />
    </>
  );
}

function App() {
  const [showFirstCanvas, setShowFirstCanvas] = useState(true);
  const [fabricPrice, setFabricPrice] = useState(0);
  const [buttonPrice, setButtonPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [liningPrice, setLiningPrice] = useState(0);
  const [fov, setFov] = useState(25);
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);

  const toggleCanvas = () => {
    setShowFirstCanvas((prev) => !prev);
  };

  const handleWheel = (event) => {
    setFov((prevFov) => {
      let newFov = prevFov - event.deltaY * 0.05;
      return Math.min(Math.max(newFov, 5), 20);
    });
  };

  useEffect(() => {
    getEntries()
      .then(() => {})
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setTotalPrice(buttonPrice + fabricPrice + liningPrice);
  }, [buttonPrice, fabricPrice, liningPrice]);

  return (
    <CustomizationProvider>
      <div className="App" onWheel={handleWheel}>
        {showFirstCanvas && (
          <Canvas
            onCreated={({ gl, scene, camera }) => {
              canvasRef1.current = { gl, scene, camera };
            }}
            shadows
          >
            <PerspectiveCamera makeDefault fov={fov} position={[0, 3.25, 8]} />
            
            {/* Ambient Light (Soft Global Illumination) */}
            <ambientLight intensity={0.4} />

            {/* Key Light (Main Directional Light) - Warmer Light */}
            <DirectionalLightWithHelper position={[1.4, 6, 4.5]} targetPosition={[0, 1, 0]} color="white" intensity={0.5} />

            {/* Fill Light (Reduces Shadows) - Soft Cool Light */}
            <DirectionalLightWithHelper position={[-1.4, 6, 4.5]} targetPosition={[0,1, 0]} color="white" intensity={0.5} />

            {/* Rim Light (Adds Depth) - Cool Back Light */}
            <DirectionalLightWithHelper position={[0, 5, -4]} targetPosition={[0, 0, 0]} color="white" intensity={0.8} />

            {/* HDRI Environment (Subtle & Neutral for Texture Accuracy) */}
            <Environment preset="city" />

            <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
          </Canvas>
        )}
        {!showFirstCanvas && (
          <Canvas
            onCreated={({ gl, scene, camera }) => {
              canvasRef2.current = { gl, scene, camera };
            }}
            shadows
          >
            <Experience />
          </Canvas>
        )}
        <Configurator />
        <div className="storeprice absolute text-black z-[9] font-bold left-[2vw] top-[5vh] w-[5vw] h-[5vh] xs:w-[22vw] text-nowrap xs:left-1 xs:top-0 flex items-center justify-center">
          Total: ${Number(totalPrice).toFixed(2)}
        </div>
        <p className="absolute top-20 left-8 text-sm xs:top-7 xs:left-1">
          2-3 weeks delivery
        </p>
      </div>
    </CustomizationProvider>
  );
}

export default App;
