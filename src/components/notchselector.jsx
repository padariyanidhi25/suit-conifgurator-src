import React, { useState, useEffect } from "react";
import {
  Nochdoublebrested,
  Notchdoublebtn,
  Notchsinglebtn,
} from "./notchoption";
import eventEmitter from "./eventEmitter";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Breastedbutton, Doublebutton, Singlebutton } from "./buttonglb";

const NotchSelector = ({ defaultNotch, collarType, selectedComponent }) => {
  const [selectedNotch, setSelectedNotch] = useState(defaultNotch);
  const [fabricURL, setFabricURL] = useState(null);
  const [buttonTextureURL, setButtonTextureURL] = useState(null);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 3.25, 8)); // Default camera position
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
      setTargetPosition(new Vector3(0, 3.25, 8));

      // Hide the relevant UI components
      document.getElementById("lapelContent").style.display = "none";
      document.getElementById("lapel-option").style.display = "none";
      document.getElementById("lapel-width").style.display = "none";
      document.getElementById("lapel-buttonhole").style.display = "none";
      document.getElementById("confirmlapel").style.display = "none";
      document.getElementById("monogrm").style.display = "flex";
    };

    const confrmlapelBtn = document.getElementById("confrmclosure");
    if (confrmlapelBtn) {
      confrmlapelBtn.addEventListener("click", handleConfirmLapelClick);
    }

    return () => {
      if (confrmlapelBtn) {
        confrmlapelBtn.removeEventListener("click", handleConfirmLapelClick);
      }
    };
  }, []);

  // Remaining functionality (notch and button selections) remains the same
  // useEffect(() => {
  //   const handleFabricSelection = (fabric) => {
  //     setFabricURL(fabric.textureURL);
  //   };
  //   eventEmitter.on("fabricSelected", handleFabricSelection);

  //   return () => {
  //     eventEmitter.off("fabricSelected", handleFabricSelection);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleButtonTextureSelection = (textureURL) => {
  //     setButtonTextureURL(textureURL);
  //   };
  //   eventEmitter.on("buttonSelected", handleButtonTextureSelection);
  //   return () => {
  //     eventEmitter.off("buttonSelected", handleButtonTextureSelection);
  //   };
  // }, []);

  useEffect(() => {
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
    console.log('fabric name: ', selectedFabricName);
    setFabricURL(selectedFabricName);
    
    if (selectedFabricName) {
      eventEmitter.emit('applyFabric', { textureURL: selectedFabricName });
    }
    console.log('fabric url: ', fabricURL);
    
    console.log('fabric url: ', fabricURL);

  }, [selectedNotch, fabricURL]);

  useEffect(()=>{
    const selectedbuttonurl=localStorage.getItem('ButtonURL')
    console.log("button name:",selectedbuttonurl);
    setButtonTextureURL(selectedbuttonurl)
    if(selectedbuttonurl){
      eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    }
    
  },[selectedNotch, buttonTextureURL])

  // useEffect(() => {
  //   if (buttonTextureURL) {
  //     eventEmitter.emit("applyButtonTexture", { textureURL: buttonTextureURL });
  //   }
  // }, [selectedNotch, buttonTextureURL]);

  useEffect(() => {
    localStorage.setItem("selectedNotch", selectedNotch);
  }, [selectedNotch]);

  useEffect(() => {
    const savedNotch = localStorage.getItem("selectedNotch");
    if (savedNotch) {
      setSelectedNotch(savedNotch);
    }
  }, []);
  useEffect(() => {
    const handleNotchChange = (notchType) => {
      setSelectedNotch(notchType);
      setTargetPosition(new Vector3(0, 3, 0));
      if (buttonTextureURL) {
        eventEmitter.emit("applyButtonTexture", {
          textureURL: buttonTextureURL,
        });
      }
       // Emit the applyFabric event with the current fabric URL when the waistband changes
       if (fabricURL) {
        eventEmitter.emit('applyFabric', { textureURL: fabricURL });
      }
    };

    document
      .getElementById("single_btn")
      .addEventListener("click", () => handleNotchChange("single"));
    document
      .getElementById("double_btn")
      .addEventListener("click", () => handleNotchChange("double"));
    document
      .getElementById("doublebreasted")
      .addEventListener("click", () => handleNotchChange("breasted"));

    return () => {
      document
        .getElementById("single_btn")
        .removeEventListener("click", handleNotchChange);
      document
        .getElementById("double_btn")
        .removeEventListener("click", handleNotchChange);
      document
        .getElementById("doublebreasted")
        .removeEventListener("click", handleNotchChange);
    };
  }, [buttonTextureURL]);

  useEffect(() => {
    setSelectedNotch(defaultNotch);
  }, [defaultNotch]);

  return (
    <>
      {/* {(selectedComponent === "Classic" && collarType === "notch") ||
        (selectedNotch === "double" && (
          <Notchdoublebtn fabricURL={fabricURL} />
        ))}
      {(selectedComponent === "Breasted" && collarType === "notch") ||
        (selectedNotch === "breasted" && (
          <Nochdoublebrested fabricURL={fabricURL} />
        ))} */}
      {selectedNotch === "single" && collarType === "notch" && (
        <>
        <Notchsinglebtn fabricURL={fabricURL} />
        <Singlebutton/>
        </>
      )}
      {selectedNotch === "double" && collarType === "notch" && (
        <>
        <Notchdoublebtn fabricURL={fabricURL} />
        <Doublebutton/>
        </>
      )}
      {selectedNotch === "breasted" && collarType === "notch" && (
        <>
        <Nochdoublebrested fabricURL={fabricURL} />
        <Breastedbutton/>
        </>
      )}
    </>
  );
};

export default NotchSelector;
