import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Butterfly_Lining, Half_Linning, Linig } from './linig';

const LinigDisplay = () => {
  const [showLinig, setShowLinig] = useState(false);
  const [showButterfly, setShowButterfly] = useState(false);
  const [showHalfLinning, setShowHalfLinning] = useState(false);

  useEffect(() => {
    const handleShowLinig = () => {
      setShowLinig(true);
      setShowButterfly(false);
      setShowHalfLinning(false); // Hide Half_Linning when Linig is shown
    };

    const handleHideLinig = () => {
      setShowLinig(false);
      setShowButterfly(false);
      setShowHalfLinning(false); // Hide all components when unlined is clicked
    };

    const handleShowButterfly = () => {
      setShowButterfly(true);
      setShowLinig(false);
      setShowHalfLinning(false); // Hide Linig and Half_Linning when Butterfly_Lining is shown
    };

    const handleShowHalfLinning = () => {
      setShowHalfLinning(true);
      setShowLinig(false);
      setShowButterfly(false); // Hide Linig and Butterfly_Lining when Half_Linning is shown
    };

    const fullLinnedDiv = document.getElementById('full_linned');
    const butterflyDiv = document.getElementById('Butterfly');
    const unlinedDiv = document.getElementById('unlined');
    const halflinedDiv = document.getElementById('halflined');

    if (fullLinnedDiv) {
      fullLinnedDiv.addEventListener('click', handleShowLinig);
    }

    if (unlinedDiv) {
      unlinedDiv.addEventListener('click', handleHideLinig);
    }

    if (butterflyDiv) {
      butterflyDiv.addEventListener('click', handleShowButterfly);
    }

    if (halflinedDiv) {
      halflinedDiv.addEventListener('click', handleShowHalfLinning);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (fullLinnedDiv) {
        fullLinnedDiv.removeEventListener('click', handleShowLinig);
      }
      if (unlinedDiv) {
        unlinedDiv.removeEventListener('click', handleHideLinig);
      }
      if (butterflyDiv) {
        butterflyDiv.removeEventListener('click', handleShowButterfly);
      }
      if (halflinedDiv) {
        halflinedDiv.removeEventListener('click', handleShowHalfLinning);
      }
    };
  }, []);

  return (
    <>
      {showLinig && <Linig />}
      {showButterfly && <Butterfly_Lining />}
      {showHalfLinning && <Half_Linning />}
    </>
  );
};

export default LinigDisplay;
