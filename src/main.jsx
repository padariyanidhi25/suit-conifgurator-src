import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
// import MonogramComp from './components/Monogram';
import './index.css';
import BtnsComp from './components/buttons';
import FabComp from './components/Fabric';
// import LiningColor from './components/lining_color';
  
// Create root for the main application
const root = createRoot(document.getElementById('root'));

// Render your main application inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

  
// Create root for the main application
const BtnsRoot = createRoot(document.getElementById('button-menu'));

// Render your main application inside the root
BtnsRoot.render(
  <React.StrictMode>
    <BtnsComp />
  </React.StrictMode>
);

const fabRoot=createRoot(document.getElementById('fabric-type'));

fabRoot.render(
  <React.StrictMode>
    <FabComp/>
  </React.StrictMode>
)
// const lcolorRoot=createRoot(document.getElementById('lining-color'));

// lcolorRoot.render(
//   <React.StrictMode>
//     <LiningColor/>
//   </React.StrictMode>
// )