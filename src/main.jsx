import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
// import MonogramComp from './components/Monogram';
import "./index.css";
import BtnsComp from "./components/buttons";
import FabComp from "./components/Fabric";
// import LiningComponent from "./components/lining_color";
import TBtnsComp from "./components/trouserbutton";
import LiningComponent from "./components/lining_color";

// Create root for the main application
const root = createRoot(document.getElementById("root"));

// Render your main application inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create root for the main application
const BtnsRoot = createRoot(document.getElementById("button-menu"));

// Render your main application inside the root
BtnsRoot.render(
  <React.StrictMode>
    <BtnsComp />
  </React.StrictMode>
);

const fabRoot = createRoot(document.getElementById("fabric-type"));

fabRoot.render(
  <React.StrictMode>
    <FabComp />
  </React.StrictMode>
);
const liningRoot = createRoot(document.getElementById("button-menut"));

liningRoot.render(
  <React.StrictMode>
    <TBtnsComp />
  </React.StrictMode>
);
const liningCRoot = createRoot(document.getElementById("lining-print"));

liningCRoot.render(
  <React.StrictMode>
    <LiningComponent/>
  </React.StrictMode>
);
