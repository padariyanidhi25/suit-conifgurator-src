import React, { useState, useEffect } from "react";
import {
  Nochdoublebrested,
  Notchdoublebtn,
  Notchsinglebtn,
} from "./notchoption";
import eventEmitter from "./eventEmitter";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Notchbreasted, NotchDoublebutton, NotchSinlebutton } from "./notchwide";
import { Breastedbutton, Doublebutton, Singlebutton } from "./buttonglb";
import { Amf6mmdoublebuttonWide, Amf6mmSinglebuttonWide, Amf6mmwidedoubleBreastedwide, AmfnotchBreastedwide, AmfnotchwideDouble, AmfnotchwideSingle } from "./amf";

const NotchWideSelector = ({ defaultwideNotch, collarType, selectedComponent }) => {
  const [selectedwideNotch, setSelectedwideNotch] = useState(defaultwideNotch);
  const [fabricURL, setFabricURL] = useState(null);
  const [is2mmSelected, setIs2mmSelected] = useState(false);
  const [is6mmSelected, setIs6mmSelected] = useState(false);
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
  useEffect(() => {
    const handle2mmClick = () => {
      setIs2mmSelected(true);
      setIs6mmSelected(false); // Unselect 6mm when 2mm is selected
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

  }, [selectedwideNotch, fabricURL]);

  useEffect(()=>{
    const selectedbuttonurl=localStorage.getItem('ButtonURL')
    console.log("button name:",selectedbuttonurl);
    setButtonTextureURL(selectedbuttonurl)
    if(selectedbuttonurl){
      eventEmitter.emit("applyButtonTexture", { textureURL: selectedbuttonurl })    }
    
  },[selectedwideNotch, buttonTextureURL])

  // useEffect(() => {
  //   if (buttonTextureURL) {
  //     eventEmitter.emit("applyButtonTexture", { textureURL: buttonTextureURL });
  //   }
  // }, [selectedNotch, buttonTextureURL]);

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
    setSelectedwideNotch(defaultwideNotch);
  }, [defaultwideNotch]);

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
      {selectedwideNotch === "single" && collarType === "notchwide" && (
        <>
        <  NotchSinlebutton fabricURL={fabricURL} />
        {console.log("Rendering Singlebutton")}
         <Singlebutton/>
         {is2mmSelected &&<AmfnotchwideSingle/>}
         {is6mmSelected&&<Amf6mmSinglebuttonWide/>}
        </>
      )}
      {selectedwideNotch === "double" && collarType === "notchwide" && (
        <>
        <NotchDoublebutton fabricURL={fabricURL} />
        <Doublebutton/>
        {is2mmSelected &&<AmfnotchwideDouble/>}
        {is6mmSelected && <Amf6mmdoublebuttonWide/>}
        </>
      )}
      {selectedwideNotch === "breasted" && collarType === "notchwide" && (
        <>
        <Notchbreasted fabricURL={fabricURL} />
        <Breastedbutton/>
        {is2mmSelected &&<AmfnotchBreastedwide/>}
        {is6mmSelected && <Amf6mmwidedoubleBreastedwide/>}
        </>
      )}
    </>
  );
};

export default NotchWideSelector;
