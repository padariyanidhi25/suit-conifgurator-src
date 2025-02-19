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
import Panning from "./components/Panning";




function DirectionalLightWithHelper({ position, color, intensity, targetPosition,helperColor }) {
  const lightRef = useRef();
  const targetRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 1, helperColor)

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

  const MAX_SCROLLS = 6; // Maximum zoom-in and zoom-out steps
  const ZOOM_STEP = 2; // Smaller step for fine control
  
  const [scrollCount, setScrollCount] = useState(0);
  
  const handleWheel = (event) => {
    setScrollCount((prevCount) => {
      let newCount = prevCount - Math.sign(event.deltaY); // Increase or decrease count
      newCount = Math.max(-MAX_SCROLLS, Math.min(MAX_SCROLLS, newCount)); // Limit to -3 to +3
  
      let newFov = 25 - newCount * ZOOM_STEP; // Adjust FOV based on scroll count
      setFov(Math.min(Math.max(newFov, 10), 25)); // Clamp FOV between 10 and 25
  
      return newCount; // Update scroll count
    });
  };

  useEffect(() => {
    getEntries()
      .then(() => {})
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const savedButtonPrice = localStorage.getItem("ButtonPrice");
    const savedFabricPrice = localStorage.getItem("selectedFabricPrice");
    const savedLiningPrice = localStorage.getItem("LiningColorPrice");

    if (savedButtonPrice) setButtonPrice(Number(savedButtonPrice));
    if (savedFabricPrice) setFabricPrice(Number(savedFabricPrice));
    if (savedLiningPrice) setLiningPrice(Number(savedLiningPrice));
  }, []);

  useEffect(() => {
    const handleButtonSelected = ({ price }) => {
      setButtonPrice(Number(price) || 0);
      localStorage.setItem("ButtonPrice", price);
    };

    const handleFabricSelected = ({ price }) => {
      setFabricPrice(Number(price) || 0);
      localStorage.setItem("FabricPrice", price);
    };

    const handleLiningColorSelected = ({ price }) => {
      setLiningPrice(Number(price) || 0);
      localStorage.setItem("LiningColorPrice", price);
    };

    eventEmitter.on("buttonSelected", handleButtonSelected);
    eventEmitter.on("fabricSelected", handleFabricSelected);
    eventEmitter.on("applyLiningColor", handleLiningColorSelected);

    return () => {
      eventEmitter.off("buttonSelected", handleButtonSelected);
      eventEmitter.off("fabricSelected", handleFabricSelected);
      eventEmitter.off("applyLiningColor", handleLiningColorSelected);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(buttonPrice + fabricPrice + liningPrice);
  }, [buttonPrice, fabricPrice, liningPrice]);
  return (
    <CustomizationProvider>
      <div className="App" >
        {showFirstCanvas && (
          <Canvas
            onWheel={handleWheel}
            onCreated={({ gl, scene, camera }) => {
              canvasRef1.current = { gl, scene, camera };
            }}
            shadows
          >
            <PerspectiveCamera makeDefault fov={fov} position={[0, 3.25, 8]} />
            <Panning/>
            {/* Ambient Light (Soft Global Illumination) */}
            <ambientLight intensity={0.01} />

            {/* Key Light (Main Directional Light) - Warmer Light */}
            <DirectionalLightWithHelper position={[1.4, 5, 4.5]} targetPosition={[0, 1, 0]} color="white" intensity={0.17} />

            {/* Fill Light (Reduces Shadows) - Soft Cool Light */}
            <DirectionalLightWithHelper position={[-1.4, 5, 4.5]} targetPosition={[0,1, 0]} color="white" intensity={0.17} />

            {/* Rim Light (Adds Depth) - Cool Back Light */}
            <DirectionalLightWithHelper position={[0, 5, -2]} targetPosition={[0, 0, 0]} color="white" intensity={0.8} />

            {/* HDRI Environment (Subtle & Neutral for Texture Accuracy) */}
            <Environment preset="city" />

            <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
          </Canvas>
        )}
        {!showFirstCanvas && (
          <Canvas
            onWheel={handleWheel}
            onCreated={({ gl, scene, camera }) => {
              canvasRef2.current = { gl, scene, camera };
            }}
            shadows
          >


            <Experience setFabricPrice={setFabricPrice} />
          </Canvas>
        )}
        <Configurator />
        <div className="storeprice absolute text-black z-[9] font-bold left-[2vw] top-[3vh] w-[5vw] h-[5vh] xs:w-[22vw] text-nowrap xs:left-1 xs:top-0 flex items-center justify-center">
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
