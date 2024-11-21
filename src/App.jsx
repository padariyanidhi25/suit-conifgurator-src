
import React, { useState, useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import { DirectionalLightHelper } from "three";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { getEntries } from "./Firebase/userUtil";
import eventEmitter from "./components/eventEmitter";

function StaticDirectionalLight({ position, targetPosition, intensity, helperColor }) {
  const lightRef = useRef();
  const targetRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 1, helperColor);
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
        castShadow={true}
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
  const [canvasReady, setCanvasReady] = useState(false); // Tracks if the canvas is ready
  const canvasRef = useRef(null);
  const glRef = useRef();

  const toggleCanvas = () => {
    setShowFirstCanvas((prev) => !prev);
  };

  const handleWheel = (event) => {
    setFov((prevFov) => {
      let newFov = prevFov - event.deltaY * 0.05;
      return Math.min(Math.max(newFov, 5), 20);
    });
  };

  const takeScreenshot = () => {
    if (!canvasRef.current) {
      console.error("Canvas properties are not ready for screenshot.");
      return;
    }

    const { gl, scene, camera } = canvasRef.current;
    gl.render(scene, camera);
    const imageURL = gl.domElement.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "canvas-screenshot.png";
    link.click();
  };

  useEffect(() => {
    getEntries()
      .then((result) => {
        // Handle results
      })
      .catch((err) => {
        console.error(err);
      });
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
      <div className="App" onWheel={handleWheel}>
        {/* <button
          onClick={takeScreenshot}
          className={`screenshot-btn bg-black text-white ${!canvasReady ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canvasReady} // Disable button if canvas isn't ready
        >
          Take Screenshot
        </button> */}
        {showFirstCanvas && (
          <Canvas
            onCreated={({ gl, scene, camera }) => {
              canvasRef.current = { gl, scene, camera };
              setCanvasReady(true); // Mark canvas as ready
            }}
          >
            <PerspectiveCamera makeDefault fov={fov} position={[0, 3.25, 8]} />
            <StaticDirectionalLight
                position={[-0.621883, 0.32952, 0.268164]}
                targetPosition={[-0.75, -1, -3]}
                intensity={0.15}
              />

              <StaticDirectionalLight
                position={[0.629522, 0.42188, -0.652444]}
                targetPosition={[2, 0.5, 4]}
                intensity={0.15}
              />
              <StaticDirectionalLight
                position={[0, -10, 5]}
                targetPosition={[0, -3, 4]}
                intensity={0.15}
              />
            <Environment preset="city" intensity={0.2} />
            <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
          </Canvas>
        )}
        {!showFirstCanvas && <Canvas ref={glRef}><Experience /></Canvas>}
        <Configurator takeScreenshot={takeScreenshot} />
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