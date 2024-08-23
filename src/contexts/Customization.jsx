import { createContext, useContext, useState } from "react";



const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [symbolmaterial, setsymbolMaterial] = useState("fabric");


  return (
    <CustomizationContext.Provider
      value={{
       
    
        symbolmaterial,
        setsymbolMaterial,
       
       
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
