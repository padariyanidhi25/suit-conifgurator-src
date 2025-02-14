
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

function DirectionalLightWithHelper({ position, color, intensity ,targetPosition}) {
  const lightRef = useRef();
  const targetRef = useRef();
 
  // useHelper(lightRef, DirectionalLightHelper, 1, color);
  useEffect(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
    }
  }, []);

  return(
    <>
    
    <directionalLight ref={lightRef} position={position} intensity={intensity} color={color} />;
    <mesh ref={targetRef} position={targetPosition} />
    </>
  )
  
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
  const canvasRef1 = useRef(null);
const canvasRef2 = useRef(null);

const lightRef1 = useRef();
const lightRef2 = useRef();
const lightRef3 = useRef();

  const toggleCanvas = () => {
    setShowFirstCanvas((prev) => !prev);
  };

  const handleWheel = (event) => {
    setFov((prevFov) => {
      let newFov = prevFov - event.deltaY * 0.05;
      return Math.min(Math.max(newFov, 5), 20);
    });
  };

  // Add this function after your existing takeScreenshot function
// const takeScreenshotOfBothCanvases = () => {
//   // First canvas
//   if (canvasRef1.current) {
//     const { gl: gl1, scene: scene1, camera: camera1 } = canvasRef1.current;
//     gl1.render(scene1, camera1);
//     const imageURL1 = gl1.domElement.toDataURL("image/png");
//     const link1 = document.createElement("a");
//     link1.href = imageURL1;
//     link1.download = "front-view-screenshot.png";
//     link1.click();
//   }

//   // Second canvas
//   if (canvasRef2.current) {
//     const { gl: gl2, scene: scene2, camera: camera2 } = canvasRef2.current;
//     gl2.render(scene2, camera2);
//     const imageURL2 = gl2.domElement.toDataURL("image/png");
//     const link2 = document.createElement("a");
//     link2.href = imageURL2;
//     link2.download = "back-view-screenshot.png";
//     link2.click();
//   }
// };
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
          onClick={takeScreenshotOfBothCanvases}
          className={`screenshot-btn bg-black text-white ${!canvasReady ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canvasReady} // Disable button if canvas isn't ready
        >
          Take Screenshot
        </button> */}
        {showFirstCanvas && (
          <Canvas
            onCreated={({ gl, scene, camera }) => {
              canvasRef1.current = { gl, scene, camera }
              setCanvasReady(true); // Mark canvas as ready
            }}
          >
            <PerspectiveCamera makeDefault fov={fov} position={[0, 3.25, 8]} />
            <ambientLight intensity={0.4} />
            <DirectionalLightWithHelper position={[2,5,1]} targetPosition={[-4,0,0]}  color="white" intensity={0.25} />
            {/* <DirectionalLightWithHelper position={[0.629522, 0.42188, -0.652444]} target={[0,0,0]} color="blue" intensity={0.1} /> */}
            <DirectionalLightWithHelper position={[-3,-2,-5]}  targetPosition={[0,4,-5]} color="white" intensity={0.25} />
            
            {/* {lightRef1.current && <primitive object={new DirectionalLightHelper(lightRef1.current, 1, "red")} />}
            {lightRef2.current && <primitive object={new DirectionalLightHelper(lightRef2.current, 1, "blue")} />}
            {lightRef3.current && <primitive object={new DirectionalLightHelper(lightRef3.current, 1, "green")} />} */}
            <Environment preset="city" />
            <Experience toggleCanvas={toggleCanvas} setFabricPrice={setFabricPrice} />
          </Canvas>
        )}
        {!showFirstCanvas &&   <Canvas
    onCreated={({ gl, scene, camera }) => {
      canvasRef2.current = { gl, scene, camera };
    }}
  ><Experience /></Canvas>}
        <Configurator 
   />
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