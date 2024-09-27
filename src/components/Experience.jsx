import {
  OrbitControls,
  Stage,
  Environment,
  useProgress,
} from "@react-three/drei";
import Chair from "./Chair";
import { Suspense, useState, useEffect } from "react";
import { Classic } from "./classic";
import { Model } from "./trouser";
import { SpinnerLoader } from "./Spinner";
import PocketSelector from "./pocketselector";
import UpperpocketSelector from "./upperpocketselector";
import { Linig } from "./linig";
import LinigDisplay from "./linigselector";
import CollarSelector from "./collarselector";
import NotchSelector from "./notchselector";
import PeakSelector from "./peakselector";
import { Double_vent } from "./doublevent";
import { Kaaj } from "./kaaj";
import PleatSelector from "./pleatselector";
import TrouserPocketSelector from "./trouserpocketselector";
// import { Single_Side_Closure_5cm, Waistbend } from "./waistband";
import { Button } from "./waistbandbutton";
import ShoulderSelector from "./ShoulderSelector";
import WaistbandSelector from "./waistbandselector";
import HemSelector from "./hemfinishselector";
import { Kaaj_Peak } from "./Kaaj_Peak";
import { Hook4cm } from "./hook";

const Experience = ({ toggleCanvas }) => {
  const [showClassic, setShowClassic] = useState(false);
  const [showTrouser, setShowTrouser] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [defaultNotch, setDefaultNotch] = useState("breasted"); // New state for default notch
  const [showPocketSelector, setShowPocketSelector] = useState(true); // State for PocketSelector visibility
  const [showUpperPocketSelector, setShowUpperPocketSelector] = useState(true); // State for UpperPocketSelector visibility
  const [defaultPeak, setDefaultPeak] = useState("null");
  const [collarType, setCollarType] = useState("notch");
  const { progress } = useProgress();
  const [showvent, setshowvent] = useState(true);
  const [showlining, setshowlining] = useState("null");
  const [showcollar, setshowcollar] = useState("null");
  const [showPleatSelector, setShowPleatSelector] = useState(false);
  const [showTrouserPocketSelector, setShowTrouserPocketSelector] =
    useState(false);
  const [showWaistband, setShowWaistband] = useState(false);
  const [showKaaj, setShowKaaj] = useState(true);
  const [showPKaaj, setPShowKaaj] = useState(true);

  const [shoulder, setShoulder] = useState(true);
  const [showhem, setShowHem] = useState(false);
  useEffect(() => {
    const classicButton = document.getElementById("classic");
    const breastedButton = document.getElementById("breasted");
    const confirmButton = document.getElementById("confirm");
    const trouserButton = document.getElementById("button");
    const jacketButton = document.getElementById("linigs");
    const notchButton = document.getElementById("notch_collar");
    const peakButton = document.getElementById("peak_collar");

    const handleClassicClick = () => {
      setShowClassic(true);
      setShowTrouser(false);
      setSelectedComponent("Classic");
      setDefaultNotch("double"); // Set default notch for Classic
      setShowPocketSelector(true); // Show PocketSelector
      setShowUpperPocketSelector(true); // Show UpperPocketSelector
      // setCollarType("notch");
       // Only set the default collar type if none was previously selected
    if (!collarType) {
      setCollarType("notch");
    }
      setDefaultPeak("double");
      setshowvent(true);
      setshowlining(true);
      setshowcollar(true);
      setShowPleatSelector(false);
      setShowTrouserPocketSelector(false);
      setShowWaistband(false);
      setShowKaaj(true);
      setShoulder(true);
      setPShowKaaj(true)
      setShowHem(false);
    };

    const handleBreastedClick = () => {
      setShowClassic(false);
      setShowTrouser(false);
      setSelectedComponent("Breasted");
      setDefaultNotch("breasted"); // Set default notch for Breasted
      setShowPocketSelector(true); // Show PocketSelector
      setShowUpperPocketSelector(true); // Show UpperPocketSelector
      // setCollarType("notch");
      if (!collarType) {
        setCollarType("notch");
      }
      setDefaultPeak("breasted");
      setshowvent(true);
      setshowlining(true);
      setshowcollar(true);
      setShowPleatSelector(false);
      setShowTrouserPocketSelector(false);
      setShowWaistband(false);
      setShowKaaj(true);
      setShoulder(true);
      setShowHem(false);
      setPShowKaaj(true)

    };

    const handleConfirmClick = () => {
      if (!selectedComponent) {
        setSelectedPeak("breasted"); // Default to "breasted" if no component is selected
      }
      document.getElementById("type_suit").style.display = "none";
      document.getElementById("confirm").style.display = "none";
      document.getElementById("main").style.display = "block";
      document.querySelector(".App").style.width = "70vw";
      document.querySelector(".App").style.height = "90%";
      document.querySelector(".App").style.top = "7vh";
      finish.style.display = "block";
      confirm = true;
      console.log("Selected Component:", selectedComponent);
      orientationChecker();
    };

    const handleTrouserClick = () => {
      setShowClassic(false);
      setShowTrouser(true);
      setDefaultNotch("none"); // Reset notch for Trouser
      setShowPocketSelector(false); // Hide PocketSelector
      setShowUpperPocketSelector(false); //hide Upper pocketselector
      setDefaultPeak("null");
      setshowvent(false);
      setshowlining(false);
      setshowcollar(false);
      setShowPleatSelector(true);
      setShowTrouserPocketSelector(true);
      setShowWaistband(true);
      setShowKaaj(false);
      setShoulder(false);
      setShowHem(true);
      setPShowKaaj(false)

    };

    const handleJacketClick = () => {
      // handleClassicClick()
      // handleBreastedClick()
      if (selectedComponent == "Classic") {
        handleClassicClick();
      } else {
        handleBreastedClick();
      }
      setShowTrouser(selectedComponent === "Trouser");
    };
    const handleNotchClick = () => {
      setCollarType("notch"); // Set collar type to 'notch'
      // setDefaultPeak('null');
    };

    const handlePeakClick = () => {
      setCollarType("peak"); // Set collar type to 'peak'
      // setDefaultNotch('null');
    };

    classicButton.addEventListener("click", handleClassicClick);
    breastedButton.addEventListener("click", handleBreastedClick);
    confirmButton.addEventListener("click", handleConfirmClick);
    trouserButton.addEventListener("click", handleTrouserClick);
    jacketButton.addEventListener("click", handleJacketClick);
    notchButton.addEventListener("click", handleNotchClick);
    peakButton.addEventListener("click", handlePeakClick);

    return () => {
      classicButton.removeEventListener("click", handleClassicClick);
      breastedButton.removeEventListener("click", handleBreastedClick);
      confirmButton.removeEventListener("click", handleConfirmClick);
      trouserButton.removeEventListener("click", handleTrouserClick);
      jacketButton.removeEventListener("click", handleJacketClick);
      notchButton.removeEventListener("click", handleNotchClick);
      peakButton.removeEventListener("click", handlePeakClick);
    };
  }, [selectedComponent]);

  function getOrientation() {
    const orientation =
      window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    return orientation;
  }

  let isLandscape = false;

  function orientationChecker() {
    const o = getOrientation();
    if (o === "Landscape") {
      isLandscape = true;
      document.getElementById("potraitimg").style.display = "none";
    } else if (confirm) {
      isLandscape = false;
      document.getElementById("potraitimg").style.display = "none";
      document.querySelector(".App").style.width = "100vw";
      document.querySelector(".App").style.height = "55vh";
    }
  }

  window.onresize = orientationChecker;
  console.log(collarType);

  return (
    <>
      {progress < 100 && <SpinnerLoader />}
      <Suspense fallback={null}>
        {/* <Stage intensity={0} environment={null} shadows={false} animations={false} adjustCamera={false} > */}
        {/* <OrbitControls
            enableRotate={false}
            enablePan={true}
            panSpeed={0.5}
            zoomSpeed={0.3}
            minDistance={}
            maxDistance={6}
            
          /> */}
        {/* <OrbitControls/> */}

        {/* <Environment preset="studio" /> */}
        {/* <Kaaj/> */}
        {/* <Hook4cm/> */}

        {showPocketSelector && <PocketSelector />}
        {shoulder && <ShoulderSelector />}
        {showUpperPocketSelector && <UpperpocketSelector />}
        {collarType === "notch" && showKaaj ? (<Kaaj />):showPKaaj&& (<Kaaj_Peak/>)}
        {/* {collarType == "notch" ? (
          <NotchSelector
            defaultNotch={defaultNotch}
            collarType={collarType}
            selectedComponent={selectedComponent}
          />
        ) : (
          <PeakSelector
            defaultPeak={defaultPeak}
            collarType={collarType}
            selectedComponent={selectedComponent}
          />
        )} */}
        {showvent && <Double_vent />}
        {showPleatSelector && <PleatSelector />}
        {showTrouserPocketSelector && <TrouserPocketSelector />}
        {/* <Button/> */}
        {showWaistband && <WaistbandSelector />}
        <NotchSelector defaultNotch={defaultNotch}  collarType={collarType} selectedComponent={selectedComponent}/> 
        <PeakSelector defaultPeak={defaultPeak} collarType={collarType} selectedComponent={selectedComponent} />
        {showhem && <HemSelector />}
        {showlining && <LinigDisplay />}
        {showcollar && <CollarSelector />}
        {showTrouser ? <Model /> : showClassic ? <Classic /> : <Chair />}
        {/* </Stage> */}
      </Suspense>
    </>
  );
};

export default Experience;
