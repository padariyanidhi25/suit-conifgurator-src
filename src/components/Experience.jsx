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
import { Kaaj, NotchwideKaaj } from "./kaaj";
import PleatSelector from "./pleatselector";
import TrouserPocketSelector from "./trouserpocketselector";
// import { Single_Side_Closure_5cm, Waistbend } from "./waistband";
import { Button } from "./waistbandbutton";
import ShoulderSelector from "./ShoulderSelector";
import WaistbandSelector from "./waistbandselector";
import HemSelector from "./hemfinishselector";
import { Kaaj_Peak, PeakwideKaaj } from "./Kaaj_Peak";
import { Hook4cm } from "./hook";
import { Breastedbutton, Doublebutton, Singlebutton } from "./buttonglb";
import { Shawldouble, Shawlsingle } from "./shawl";
import ShawlSelector from "./shawlselector";
import NotchWideSelector from "./notchwideselector";
import PeakWideSelector from "./peakwideselector";
import NotchwideSelector from "./notchwideselector";

const Experience = ({ toggleCanvas }) => {
  const [showClassic, setShowClassic] = useState(false);
  const [showTrouser, setShowTrouser] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("null");
  const [defaultNotch, setDefaultNotch] = useState("breasted"); // New state for default notch
  const [defaultwideNotch, setDefaultwideNotch] = useState("null");
  const [defaultwidePeak, setDefaultwidePeak] = useState("null");

  const [showPocketSelector, setShowPocketSelector] = useState(true); // State for PocketSelector visibility
  const [showUpperPocketSelector, setShowUpperPocketSelector] = useState(true); // State for UpperPocketSelector visibility
  const [defaultPeak, setDefaultPeak] = useState("null");
  const [showShawlSelector, setShowShawlSelector] = useState(false);
  

  const [collarType, setCollarType] = useState("notch");
  const { progress } = useProgress();
  const [showvent, setshowvent] = useState(true);
  const [showlining, setshowlining] = useState("null");
  const [showcollar, setshowcollar] = useState("null");
  const [showPleatSelector, setShowPleatSelector] = useState(false);
  const [showTrouserPocketSelector, setShowTrouserPocketSelector] =
    useState(false);
  const [showWaistband, setShowWaistband] = useState(false);
  const [showKaaj, setShowKaaj] = useState(false);
  const [showPKaaj, setPShowKaaj] = useState(false);
  const [shownwKaaj, setShownwKaaj] = useState(false);
  const [showPwKaaj, setPwShowKaaj] = useState(false);

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
    const PeakWideButton = document.getElementById("peak_wide");
    const NotchWideButton = document.getElementById("notch_wide");
    const shawlButton = document.getElementById("shawl_single");

    const handleClassicClick = () => {
      setShowClassic(true);
      setShowTrouser(false);
      setShownwKaaj(false);
      setPwShowKaaj(false);
      setShowShawlSelector(false)
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
      setShoulder(true);
      setShowKaaj(true);
      setPShowKaaj(true);
      setShownwKaaj(false);
      setPwShowKaaj(false);
      setShowHem(false);
    };

    const handleBreastedClick = () => {
      setShowClassic(false);
      setShowTrouser(false);
      setShowShawlSelector(false)

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
      setPShowKaaj(true);
      setShownwKaaj(false);
      setPwShowKaaj(false);
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
      setPShowKaaj(false);
      setShownwKaaj(false);
      setPwShowKaaj(false);
      setShowShawlSelector(false);
      setDefaultwideNotch(false);
      setDefaultwidePeak(false);
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
      setDefaultNotch("double"); // Set default notch to 'double'
      setShowShawlSelector(false); // Hide ShawlSelector when Notch is selected
      setshowcollar(true);
      setShownwKaaj(false);
      setPwShowKaaj(false); // Show collar type when Notch is selected
    };

    const handlePeakClick = () => {
      setCollarType("peak"); // Set collar type to 'peak'
      setDefaultPeak("double"); // Set default peak to 'double'
      setShowShawlSelector(false); // Hide ShawlSelector when Peak is selected
      setshowcollar(true);
      setShownwKaaj(false);
      setPwShowKaaj(false);
    };

    const handleNotchWideClick = () => {
      setCollarType("notchwide");
      setDefaultwideNotch("double");
      setShowShawlSelector(false); // Hide ShawlSelector when Notch is selected
      setshowcollar(true);
      setShownwKaaj(true);
      setPwShowKaaj(false);
    };

    const handlePeakWideClick = () => {
      setCollarType("peakwide");
      setDefaultwidePeak("double");
      setShowShawlSelector(false); // Hide ShawlSelector when Notch is selected
      setshowcollar(true);
      setShownwKaaj(false);
      setPwShowKaaj(true);
    };

    const handleShawlClick = () => {
      setShowShawlSelector(true);
      setDefaultNotch("none"); // Set default notch to 'none'
      setDefaultwideNotch("none");
      setDefaultwidePeak("none");
      setDefaultPeak("none"); // Set default peak to 'none'
      setCollarType("none");
      setshowcollar(false); // Set collar type to 'shawl'
      setShowKaaj(false);
      setPShowKaaj(false);
      setShownwKaaj(false);
      setPwShowKaaj(false);
    };

    classicButton.addEventListener("click", handleClassicClick);
    breastedButton.addEventListener("click", handleBreastedClick);
    confirmButton.addEventListener("click", handleConfirmClick);
    trouserButton.addEventListener("click", handleTrouserClick);
    jacketButton.addEventListener("click", handleJacketClick);
    notchButton.addEventListener("click", handleNotchClick);
    peakButton.addEventListener("click", handlePeakClick);
    PeakWideButton.addEventListener("click", handlePeakWideClick);
    NotchWideButton.addEventListener("click", handleNotchWideClick);
    shawlButton.addEventListener("click", handleShawlClick);

    return () => {
      classicButton.removeEventListener("click", handleClassicClick);
      breastedButton.removeEventListener("click", handleBreastedClick);
      confirmButton.removeEventListener("click", handleConfirmClick);
      trouserButton.removeEventListener("click", handleTrouserClick);
      jacketButton.removeEventListener("click", handleJacketClick);
      notchButton.removeEventListener("click", handleNotchClick);
      peakButton.removeEventListener("click", handlePeakClick);
      PeakWideButton.removeEventListener("click", handlePeakWideClick);
      NotchWideButton.removeEventListener("click", handleNotchClick);
      shawlButton.removeEventListener("click", handleShawlClick);
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
        {showPocketSelector && <PocketSelector />}
        {shoulder && <ShoulderSelector />}
        {showUpperPocketSelector && <UpperpocketSelector />}
        {collarType === "notch" && showKaaj ? (
          <Kaaj />
        ) : (
          showPKaaj && <Kaaj_Peak />
        )}
        {collarType === "notchwide" && shownwKaaj ? (
          <NotchwideKaaj />
        ) : (
          showPwKaaj && <PeakwideKaaj />
        )}

        {showvent && <Double_vent />}
        {showPleatSelector && <PleatSelector />}
        {showTrouserPocketSelector && <TrouserPocketSelector />}
       {showShawlSelector && <ShawlSelector/>}
        {showWaistband && <WaistbandSelector />}
        <NotchwideSelector
          defaultwideNotch={defaultwideNotch}
          collarType={collarType}
          selectedComponent={selectedComponent}
        />
        <PeakWideSelector
          defaultwidePeak={defaultwidePeak}
          collarType={collarType}
          selectedComponent={selectedComponent}
        />
        <NotchSelector
          defaultNotch={defaultNotch}
          collarType={collarType}
          selectedComponent={selectedComponent}
        />

        <PeakSelector
          defaultPeak={defaultPeak}
          collarType={collarType}
          selectedComponent={selectedComponent}
        />
        {showhem && <HemSelector />}
        {showlining && <LinigDisplay />}
        {showcollar && <CollarSelector />}
        {showTrouser ? <Model /> : showClassic ? <Classic /> : <Chair />}
      </Suspense>
    </>
  );
};

export default Experience;
