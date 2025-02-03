import React, { useState, useEffect } from "react";
import { Peakdoublebreasted, Peakdoublebtn, Peaksinglebtn } from "./peakoption";
import eventEmitter from "./eventEmitter";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Breastedbutton, Doublebutton, Singlebutton } from "./buttonglb";

import {
  Notchbreastedwide,
  NotchDoublebuttonwide,
  NotchSingleButtonWide,
} from "./notchwide";
import {
  Amf6mmdoublebuttonWide,
  Amf6mmSinglebuttonWide,
  Amf6mmwidedoubleBreastedwide,
  AmfnotchBreastedwide,
  AmfnotchwideDouble,
  AmfnotchwideSingle,
} from "./amf";
import { NotchwideKaaj } from "./kaaj";

const NotchwideSelector = ({
  defaultwideNotch,
  collarType,
  selectedComponent,
}) => {
  const [selectedwideNotch, setSelectedwideNotch] = useState(defaultwideNotch);
  const [fabricURL, setFabricURL] = useState(null);
  const [buttonTextureURL, setButtonTextureURL] = useState(null);
  const [is2mmSelected, setIs2mmSelected] = useState(false);
  const [is6mmSelected, setIs6mmSelected] = useState(false);

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

  useEffect(() => {
    const handleConfirmAmfClick = () => {
      // Set the camera back to its original position
      setTargetPosition(new Vector3(0, 3.25, 8));
    };

    const confrmamfBtn = document.getElementById("confrmamf");
    if (confrmamfBtn) {
      confrmamfBtn.addEventListener("click", handleConfirmAmfClick);
    }

    return () => {
      if (confrmamfBtn) {
        confrmamfBtn.removeEventListener("click", handleConfirmAmfClick);
      }
    };
  }, []);

  useEffect(() => {
    const handle2mmClick = () => {
      setIs2mmSelected(true);
      setIs6mmSelected(false); // Unselect 6mm when 2mm is selected
      setTargetPosition(new Vector3(0,5, -15));
      if (fabricURL) {
        eventEmitter.emit("applyFabric", { textureURL: fabricURL });
      }
    };

    const element2mm = document.getElementById("2mm");
    if (element2mm) {
      element2mm.addEventListener("click", handle2mmClick);
    }

    return () => {
      if (element2mm) {
        element2mm.removeEventListener("click", handle2mmClick);
      }
    };
  }, []);

  useEffect(() => {
    const handle6mmClick = () => {
      setIs6mmSelected(true);
      setIs2mmSelected(false); // Unselect 2mm when 6mm is selected
      setTargetPosition(new Vector3(0, 5, -15));
      if (fabricURL) {
        eventEmitter.emit("applyFabric", { textureURL: fabricURL });
      }
    };

    const element6mm = document.getElementById("6mm");
    if (element6mm) {
      element6mm.addEventListener("click", handle6mmClick);
    }

    return () => {
      if (element6mm) {
        element6mm.removeEventListener("click", handle6mmClick);
      }
    };
  }, []);

  useEffect(() => {
    const selectedFabricName = localStorage.getItem("selectedFabricURL"); // Example, adjust if needed
    // console.log("fabric name: ", selectedFabricName);
    setFabricURL(selectedFabricName);

    if (selectedFabricName) {
      eventEmitter.emit("applyFabric", { textureURL: selectedFabricName });
    }
    // console.log("fabric url: ", fabricURL);
  }, [selectedwideNotch, fabricURL]);
  useEffect(() => {
    const selectedbuttonurl = localStorage.getItem("ButtonURL");
    // console.log("button name:", selectedbuttonurl);
    setButtonTextureURL(selectedbuttonurl);
    if (selectedbuttonurl) {
      eventEmitter.emit("applyButtonTexture", {
        textureURL: selectedbuttonurl,
      });
    }
  }, [selectedwideNotch, buttonTextureURL]);

  useEffect(() => {
    localStorage.setItem("selectedwideNotch", selectedwideNotch);
  }, [selectedwideNotch]);

  useEffect(() => {
    const savedNotch = localStorage.getItem("selectedwideNotch");
    if (savedNotch) {
      setSelectedwideNotch(savedNotch);
    }
  }, []);
  useEffect(() => {
    const handleNotchChange = (notchType) => {
      setSelectedwideNotch(notchType);
      setTargetPosition(new Vector3(0, 3, 0));

      if (fabricURL) {
        eventEmitter.emit("applyFabric", { textureURL: fabricURL });
      }
    };

    const singleBtn = document.getElementById("single_btn");
    const doubleBtn = document.getElementById("double_btn");
    const doubleBreastedBtn = document.getElementById("doublebreasted");

    singleBtn.addEventListener("click", () => handleNotchChange("single"));
    doubleBtn.addEventListener("click", () => handleNotchChange("double"));
    doubleBreastedBtn.addEventListener("click", () =>
      handleNotchChange("breasted")
    );

    return () => {
      singleBtn.removeEventListener("click", () => handleNotchChange("single"));
      doubleBtn.removeEventListener("click", () => handleNotchChange("double"));
      doubleBreastedBtn.removeEventListener("click", () =>
        handleNotchChange("breasted")
      );
    };
  }, []);

  useEffect(() => {
    setSelectedwideNotch(defaultwideNotch); // Update selected peak when defaultPeak changes
  }, [defaultwideNotch]);

  useEffect(() => {
    if (fabricURL) {
      eventEmitter.emit("applyFabric", { textureURL: fabricURL });
    }
  }, [is2mmSelected, is6mmSelected]);

  // Conditional rendering based on selectedComponent and collarType
  // console.log("notchwide", collarType, selectedwideNotch);

  return (
    <>
      {/* {selectedComponent === 'Classic' && collarType === 'peak' || selectedPeak === 'double' &&<Peakdoublebtn />}
            {selectedComponent === 'Breasted' && collarType === 'peak' || selectedPeak === 'breasted' &&<Peakdoublebreasted />} */}

      {selectedwideNotch === "single" && collarType === "notchwide" && (
        <>
          <NotchSingleButtonWide />
          <Singlebutton />
          {/* <NotchwideKaaj/> */}
          {is2mmSelected && <AmfnotchwideSingle />}
          {is6mmSelected && <Amf6mmSinglebuttonWide />}
        </>
      )}
      {selectedwideNotch === "double" && collarType === "notchwide" && (
        <>
          <NotchDoublebuttonwide />
          <Doublebutton />
          {/* <NotchwideKaaj/> */}

          {is2mmSelected && <AmfnotchwideDouble />}
          {is6mmSelected && <Amf6mmdoublebuttonWide />}
        </>
      )}
      {selectedwideNotch === "breasted" && collarType === "notchwide" && (
        <>
          <Notchbreastedwide />
          <Breastedbutton />
          {/* <NotchwideKaaj/> */}

          {is2mmSelected && <AmfnotchBreastedwide />}
          {is6mmSelected && <Amf6mmwidedoubleBreastedwide />}
        </>
      )}
    </>
  );
};

export default NotchwideSelector;
