import React, { useState, useEffect } from "react";
import eventEmitter from "./eventEmitter";
import { Pocket_jeted, Pocket_seam, Pocket_standard } from "./trouserpocket";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";

const TrouserPocketSelector = () => {
  const [selectedtrouserpocket, setSelectedtrouserpocket] = useState("jetted");
  const [fabricURL, setFabricURL] = useState(null);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 2, 8)); // Default camera position
  const { camera } = useThree(); // Access the camera
  const lerpSpeed = 0.05; // Speed for camera transition

  // This function will smoothly move the camera to a target position
  useFrame(() => {
    camera.position.lerp(targetPosition, lerpSpeed);
  });

  // Event listener for 'confrmlapel' click to reset camera position
  useEffect(() => {
    const handleConfirmLapelClick = () => {
      // Set the camera back to its original position
      setTargetPosition(new Vector3(0, 2, 8));

      // Hide the relevant UI components
      document.getElementById("pleat-option").style.display = "none";
      document.getElementById("confirmpleat").style.display = "none";
      document.getElementById("trousr").style.display = "flex";
    };

    const confrmpockett = document.getElementById("confrmpockett");
    if (confrmpockett) {
      confrmpockett.addEventListener("click", handleConfirmLapelClick);
    }

    return () => {
      if (confrmpockett) {
        confrmpockett.removeEventListener("click", handleConfirmLapelClick);
      }
    };
  }, []);

  useEffect(() => {
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
    setFabricURL(selectedFabricName);

    if (selectedFabricName) {
      eventEmitter.emit("applyFabric", { textureURL: selectedFabricName });
    }
  }, [selectedtrouserpocket, fabricURL]);
  useEffect(() => {
    localStorage.setItem("selectedtrouserpocket", selectedtrouserpocket);
  }, [selectedtrouserpocket]);

  useEffect(() => {
    const savedPocket = localStorage.getItem("selectedtrouserpocket");
    if (savedPocket) {
      setSelectedtrouserpocket(savedPocket);
    }
  }, []);

  useEffect(() => {
    const handlePockettChange = (PockettType) => {
      setSelectedtrouserpocket(PockettType);
      setTargetPosition(new Vector3(0, 3, -5));

      // Emit the applyFabric event with the current fabric URL when the waistband changes
      if (fabricURL) {
        eventEmitter.emit("applyFabric", { textureURL: fabricURL });
      }
    };

    const jeted = document.getElementById("jetted");
    const seam = document.getElementById("seam");
    const slanted = document.getElementById("slanted");

    jeted.addEventListener("click", () => handlePockettChange("jetted"));
    seam.addEventListener("click", () => handlePockettChange("seam"));
    slanted.addEventListener("click", () => handlePockettChange("slanted"));

    return () => {
      jeted.removeEventListener("click", () => handlePockettChange("jetted"));
      seam.removeEventListener("click", () => handlePockettChange("seam"));
      slanted.removeEventListener("click", () =>
        handlePockettChange("slanted")
      );
    };
  }, []);

  return (
    <>
      {selectedtrouserpocket === "jetted" && <Pocket_jeted />}
      {selectedtrouserpocket === "seam" && <Pocket_seam />}
      {selectedtrouserpocket === "slanted" && <Pocket_standard />}
    </>
  );
};

export default TrouserPocketSelector;
