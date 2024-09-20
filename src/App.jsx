import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { getEntries } from "./Firebase/userUtil";
import eventEmitter from "./components/eventEmitter";
import { Vector3 } from "three";

function StaticDirectionalLight({ position, targetPosition, intensity }) {
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

    eventEmitter.on("buttonSelected", handleButtonSelected);
    eventEmitter.on("fabricSelected", handleFabricSelected);

    return () => {
      eventEmitter.off("buttonSelected", handleButtonSelected);
      eventEmitter.off("fabricSelected", handleFabricSelected);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(buttonPrice + fabricPrice);
  }, [buttonPrice, fabricPrice]);

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
                fov={25}
                position={[0, 3.25, 8]}
                // rotation={[0,Math.PI/10,0]}
              />
              {/* <OrbitControls/> */}

              <StaticDirectionalLight
                position={[-0.45244, 0.32952, 0.27606]}
                targetPosition={[4, -1, 0.1]}
                intensity={1}
              />

              <StaticDirectionalLight
                position={[0.468164, 0.42188, 0.17211]}
                targetPosition={[-4, -1, 0.1]}
                intensity={1.5}
              />
              <StaticDirectionalLight
                position={[0, 0, 12]}
                targetPosition={[0, 3, 4]}
                intensity={0.3}
              />

              {/* <Environment preset="studio" intensity={4}/> */}

              <Experience
                toggleCanvas={toggleCanvas}
                setFabricPrice={setFabricPrice}
              />
            </Canvas>
          )}

          {/* Second Canvas */}
          {!showFirstCanvas && (
            <Canvas>
              {/* <PerspectiveCamera
                makeDefault={true}
                far={1000}
                near={0.1}
                fov={25}
                position={[0, 3.25, 3]}  // Adjust the position as needed
              /> */}

              <Experience
                toggleCanvas={toggleCanvas}
                setFabricPrice={setFabricPrice}
              />
            </Canvas>
          )}

          {/* Configurator */}
          <Configurator />

          {/* Div to display the total price */}
          <div className="storeprice absolute text-black z-[9] left-[2vw] top-[5vh] w-[5vw] h-[5vh] xs:w-[22vw] text-nowrap xs:left-1 xs:top-0 flex items-center justify-center">
            Total: ${Number(totalPrice).toFixed(2)}
          </div>
          <p className="absolute top-20 left-6 text-sm xs:top-7 xs:left-1">
            2-3 weeks delivery
          </p>
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
