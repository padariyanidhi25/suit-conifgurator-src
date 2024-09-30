import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Butterfly_Lining, Half_Linning, Linig } from "./linig";
import { Vector3 } from "three";
import eventEmitter from './eventEmitter';
const LinigDisplay = () => {
  const [showLinig, setShowLinig] = useState(true);
  const [linigURL, setLiningURL] = useState(null);

  const [showButterfly, setShowButterfly] = useState(false);
  const [showHalfLinning, setShowHalfLinning] = useState(false);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 3.25, 8)); // Default position
  const { camera } = useThree(); // Access the camera

  const lerpSpeed = 0.05; // Speed for camera transition

  // This function will smoothly move the camera to a target position
  useFrame(() => {
    camera.position.lerp(targetPosition, lerpSpeed);
  });

  useEffect(() => {
    const handleShowLinig = () => {
      setShowLinig(true);
      setShowButterfly(false);
      setShowHalfLinning(false);
      localStorage.setItem('selectedLinig', 'Full Linig');
      // Lerp to a new camera position when showing Linig
      setTargetPosition(new Vector3(0, 5, -10)); // Adjust as needed
    };

    const handleHideLinig = () => {
      setShowLinig(false);
      setShowButterfly(false);
      setShowHalfLinning(false);
      localStorage.setItem('selectedLinig','No ining');

      // Lerp back to the default camera position
      setTargetPosition(new Vector3(0, 5, -10)); // Default position
    };

    const handleShowButterfly = () => {
      setShowButterfly(true);
      setShowLinig(false);
      setShowHalfLinning(false);
      localStorage.setItem('selectedLinig', 'ButterflyLining');

      // Lerp to a new camera position when showing Butterfly Lining
      setTargetPosition(new Vector3(0, 5, -10)); // Adjust as needed
    };

    const handleShowHalfLinning = () => {
      setShowHalfLinning(true);
      setShowLinig(false);
      setShowButterfly(false);
      localStorage.setItem('selectedLinig', 'Half Linning');

      // Lerp to a new camera position when showing Half Linning
      setTargetPosition(new Vector3(0, 5, -10)); // Adjust as needed
    };

    // Adding the event listeners for each div
    const fullLinnedDiv = document.getElementById("full_linned");
    const butterflyDiv = document.getElementById("Butterfly");
    const unlinedDiv = document.getElementById("unlined");
    const halflinedDiv = document.getElementById("halflined");
    const confrmlining = document.getElementById("confrmlining");

    if (fullLinnedDiv) fullLinnedDiv.addEventListener("click", handleShowLinig);
    if (unlinedDiv) unlinedDiv.addEventListener("click", handleHideLinig);
    if (butterflyDiv) butterflyDiv.addEventListener("click", handleShowButterfly);
    if (halflinedDiv) halflinedDiv.addEventListener("click", handleShowHalfLinning);

    // Reset camera when confrmlining is clicked
    if (confrmlining) {
      confrmlining.addEventListener("click", () => {
        // Hide specific elements
        document.getElementById("liningcontent").style.display = "none";
        document.getElementById("lining-menu").style.display = "none";
        document.getElementById("lining-color").style.display = "none";
        document.getElementById("monogrm").style.display = "flex";
        confrmlining.style.display = "none";
        document.getElementById("waist").style.display = "none";
        // Lerp the camera back to the original position
        setTargetPosition(new Vector3(0, 3.25, 8));
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (fullLinnedDiv) fullLinnedDiv.removeEventListener("click", handleShowLinig);
      if (unlinedDiv) unlinedDiv.removeEventListener("click", handleHideLinig);
      if (butterflyDiv) butterflyDiv.removeEventListener("click", handleShowButterfly);
      if (halflinedDiv) halflinedDiv.removeEventListener("click", handleShowHalfLinning);
      if (confrmlining) confrmlining.removeEventListener("click", () => {});
    };
  }, []);

  useEffect(() => {
    const selectedFabricName = localStorage.getItem("LiningColorURL");
    setLiningURL(selectedFabricName);
    console.log("linig color",selectedFabricName);
    
  }, [linigURL]); // Run whenever linigURL changes

  return (
    <>
      {showLinig && <Linig />}
      {showButterfly && <Butterfly_Lining />}
      {showHalfLinning && <Half_Linning />}
    </>
  );
};

export default LinigDisplay;
