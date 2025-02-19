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
import {
  Amf6mmDoublebreasted,
  Amf6mmdoubleButton,
  Amf6mmsingleButton,
  AmfnotchBreasted,
  AmfnotchDouble,
  Amfnotchsingle,
} from "./amf";
import { texture } from "three/examples/jsm/nodes/Nodes.js";

const NotchSelector = ({ defaultNotch, collarType, selectedComponent }) => {
  const [selectedNotch, setSelectedNotch] = useState(defaultNotch);
  const [is2mmSelected, setIs2mmSelected] = useState(false);
  const [is6mmSelected, setIs6mmSelected] = useState(false);
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
      setTargetPosition(new Vector3(0, 3.25, 8));
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
  const applyFabricTexture = (url) => {
    // console.log("Applying fabric texture:", url);
    if (url) {
      // console.log("Emitting applyFabric event with URL:", url);
      eventEmitter.emit("applyFabric", { textureURL: url });
    } else {
      // console.log("No URL provided, not emitting.");
    }
  };

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
      applyFabricTexture();
      setTargetPosition(new Vector3(0, 1, -2));

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
      applyFabricTexture();
      setTargetPosition(new Vector3(0, 1, -2));

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
  }, [selectedNotch, fabricURL]);
  useEffect(() => {
    localStorage.setItem("selectedNotch", selectedNotch);
  }, [selectedNotch]);

  useEffect(() => {
    const savedNotch = localStorage.getItem("selectedNotch");
    const selectedFabricName = localStorage.getItem("selectedFabricName");
    const selectedFabricUrl = localStorage.getItem("selectedFabricURL");
    console.log('selectedFabricName', selectedFabricName);

    if (savedNotch) {
      setSelectedNotch(savedNotch);
    }

    if (selectedFabricUrl) {
       setFabricURL(selectedFabricUrl)
    }
  }, []);

  useEffect(() => {
    const handleNotchChange = (notchType) => {
      setSelectedNotch(notchType);
      targetPosition.current = new Vector3(0, 3, 0);
      const updatedFabricURL = localStorage.getItem("selectedFabricURL");
      const updatedFabricName = localStorage.getItem("selectedFabricName");

      setFabricURL(updatedFabricURL);
      setFabricName(updatedFabricName);

      // console.log(`Notch changed to: ${notchType}, Fabric Name: ${updatedFabricName}, Fabric URL: ${updatedFabricURL}`);

      if (buttonTextureURL) {
        eventEmitter.emit("applyButtonTexture", { textureURL: buttonTextureURL });
      }

      // Apply fabric texture immediately
      applyFabricTexture(updatedFabricURL);
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
    // console.log(`Fabric URL updated: ${fabricURL}`);
    if (fabricURL) {
      applyFabricTexture(fabricURL);
    }
  }, [fabricURL]);

  useEffect(() => {
    setSelectedNotch(defaultNotch);
  }, [defaultNotch]);

  useEffect(() => {
    setSelectedNotch(defaultNotch);
  }, [defaultNotch]);

  useEffect(() => {
    if (fabricURL) {
      eventEmitter.emit("applyFabric", { textureURL: fabricURL });
    }
  }, [is2mmSelected, is6mmSelected]);
  

  return (
    <>
      {selectedNotch === "single" && collarType === "notch" && (
        <>
          <Notchsinglebtn fabricURL={fabricURL} />
          <Singlebutton />
          {is2mmSelected && <Amfnotchsingle fabricURL={fabricURL} />}
          {is6mmSelected && <Amf6mmsingleButton fabricURL={fabricURL} />}
        </>
      )}
      {selectedNotch === "double" && collarType === "notch" && (
        <>
          <Notchdoublebtn fabricURL={fabricURL} />
          <Doublebutton />
          {is2mmSelected && <AmfnotchDouble fabricURL={fabricURL} />}
          {is6mmSelected && <Amf6mmdoubleButton fabricURL={fabricURL} />}
        </>
      )}
      {selectedNotch === "breasted" && collarType === "notch" && (
        <>
          <Nochdoublebrested fabricURL={fabricURL} />
          <Breastedbutton />
          {is2mmSelected && <AmfnotchBreasted fabricURL={fabricURL} />}
          {is6mmSelected && <Amf6mmDoublebreasted fabricURL={fabricURL} />}
        </>
      )}
    </>
  );
};

export default NotchSelector;
