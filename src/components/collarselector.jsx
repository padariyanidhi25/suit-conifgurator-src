import React, { useState, useEffect } from "react";
import { Notch_Collar, Notch_Wide, Peak_Collor, Peak_Wide } from "./collar";
import eventEmitter from "./eventEmitter";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Shawldouble, Shawlsingle } from "./shawl";
import { Amf6mmCollar, Amf6mmWidecollar, AmfnotchCollar, AmfnotchcollarWide } from "./amf";
import { AmfPeakcollar2mm, AmfPeakcollar2mmWide, AmfPeakcollar6mm, AmfPeakcollar6mmWide } from "./amfpeak";

const CollarSelector = () => {
  const [selectedCollar, setSelectedCollar] = useState("notch");
  const [fabricURL, setFabricURL] = useState(null);
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

    const confrmlapelBtn = document.getElementById("confrmlapel");
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
  
  useEffect(() => {
    const handleFabricSelection = (fabric) => {
      setFabricURL(fabric.textureURL);
    };

    eventEmitter.on("fabricSelected", handleFabricSelection);

    return () => {
      eventEmitter.off("fabricSelected", handleFabricSelection);
    };
  }, []);

  useEffect(() => {
    if (fabricURL) {
      eventEmitter.emit("applyFabric", { textureURL: fabricURL });
    }
  }, [selectedCollar, fabricURL]);

  useEffect(() => {
    localStorage.setItem("selectedCollar", selectedCollar);
  }, [selectedCollar]);

  useEffect(() => {
    const savedCollar = localStorage.getItem("selectedCollar");
    if (savedCollar) {
      setSelectedCollar(savedCollar);
    }
  }, []);
  useEffect(() => {
    const handleCollarChange = (collarType) => {
      setSelectedCollar(collarType);
      setTargetPosition(new Vector3(0, 7, -15));
    
      
    };

    document.getElementById("notch_collar").addEventListener("click", () => {
      handleCollarChange("notch");
    });
    document.getElementById("peak_collar").addEventListener("click", () => {
      handleCollarChange("peak");
    });
    document.getElementById("notch_wide").addEventListener("click", () => {
      handleCollarChange("notchwide");
    });
    document.getElementById("peak_wide").addEventListener("click", () => {
      handleCollarChange("peakwide");
    });
   

    return () => {
      document
        .getElementById("notch_collar")
        .removeEventListener("click", handleCollarChange);
      document
        .getElementById("peak_collar")
        .removeEventListener("click", handleCollarChange);
      document
        .getElementById("notch_wide")
        .removeEventListener("click", handleCollarChange);
      document
        .getElementById("peak_wide")
        .removeEventListener("click", handleCollarChange);
      
    };
  }, []);
  useEffect(() => {
    if (fabricURL) {
      eventEmitter.emit("applyFabric", { textureURL: fabricURL });
    }
  }, [is2mmSelected, is6mmSelected]);
  return (
    <>
      {selectedCollar === "notch" && (
        <>
          <Notch_Collar />
          {is2mmSelected &&<AmfnotchCollar  textureURL={fabricURL}/>}
          {is6mmSelected&&<Amf6mmCollar textureURL={fabricURL}/>}
        </>
      )}
      {selectedCollar === "peak" && 
     (<> 
     <Peak_Collor />
     {is2mmSelected &&<AmfPeakcollar2mm textureURL={fabricURL}/>}
          {is6mmSelected&&<AmfPeakcollar6mm textureURL={fabricURL}/>}
     </>
     )
      }
      {selectedCollar === "notchwide" && 
       <>
       <Notch_Wide />
       {is2mmSelected &&<AmfnotchcollarWide textureURL={fabricURL}/>}
       {is6mmSelected&&<Amf6mmWidecollar textureURL={fabricURL}/>}
     </>}
      {selectedCollar === "peakwide" && (
        <>
        <Peak_Wide />
        {is2mmSelected &&<AmfPeakcollar2mmWide textureURL={fabricURL}/>}
       {is6mmSelected&&<AmfPeakcollar6mmWide textureURL={fabricURL}/>}
        </>
      )}
      {/* {selectedCollar === 'shawlsingle' && <Shawlsingle/>}
      {selectedCollar === 'shawldouble' && <Shawldouble/>} */}
    </>
  );
};

export default CollarSelector;
