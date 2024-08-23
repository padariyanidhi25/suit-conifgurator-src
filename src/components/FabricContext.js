// FabricContext.js
import React, { createContext, useState, useContext } from 'react';

const FabricContext = createContext();

export const FabricProvider = ({ children }) => {
  const [selectedFabric, setSelectedFabric] = useState(null);

  return (
    <FabricContext.Provider value={{ selectedFabric, setSelectedFabric }}>
      {children}
    </FabricContext.Provider>
  );
};

export const useFabricContext = () => useContext(FabricContext);
