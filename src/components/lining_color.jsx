import React, { useState, useEffect } from 'react';
import { getEntries } from '../Firebase/userUtil';
import eventEmitter from './eventEmitter';

const LiningComponent = () => {
  const [userData, setUserData] = useState([]);
  const[selectedLiningColor,SetselectedLiningColor]=useState(null)
  const[selectedLiningColorPrice,SetselectedLiningPrice]=useState(null)
  const[selectedLiningColorUrl,SetselectedLiningColorUrl]=useState(null)



  useEffect(() => {
    getEntries()
      .then((result) => {
        console.log("Data fetched from Firebase:", result); // Log the raw data fetched
        setUserData(result);

        // Logging individual items for Lining-Color
        result.forEach(item => {
          if (item.category === 'Lining-Color' && item.isActive) {
            // console.log(`Lining Color Item - Name: ${item.name}, Price: ${item.price}, Texture: ${item.textureURL}`);
          }
        });
        const saveLiningColor=localStorage.getItem('LiningColor')
    const savedLiningColorPrice = localStorage.getItem('LiningColorPrice');
        const savedLiningColorURL = localStorage.getItem('LiningColorURL');

    if(saveLiningColor){
        SetselectedLiningColor(saveLiningColor)
    }
    if(savedLiningColorPrice){
        SetselectedLiningPrice(savedLiningColorPrice)
    }
    if(savedLiningColorURL){
        SetselectedLiningColorUrl(savedLiningColorURL)
    }
      })
      .catch((err) => {
        console.error("Error fetching data from Firebase:", err); // Log any errors
      });
  }, []);

  const handleLiningColorClick = (item, name, textureURL, price) => {
    // console.log(`Selected Lining-Color - Name: ${item.name}, Price: ${item.price}, Texture: ${item.textureURL}`);
   
    if (selectedLiningColor) {
        localStorage.removeItem('LiningColor');
      }
      if (selectedLiningColorPrice) {
        localStorage.removeItem('LiningColorPrice');
      }
  
      if (selectedLiningColorUrl) {
        localStorage.removeItem('LiningColorURL');
      }
  
  
      // Set the new selected button
      SetselectedLiningColor(name);
      SetselectedLiningPrice(price);
      SetselectedLiningColorUrl(textureURL);
  
      localStorage.setItem('LiningColor', name);
      localStorage.setItem('LiningColorPrice', price);
      localStorage.setItem('LiningColorURL', textureURL);
      // Emit event
      eventEmitter.emit('applyLiningColor', { textureURL, price });
      // console.log(name, textureURL, price);
    };
  

  return (
    <>
      {
        userData
          .filter(item => item.category === 'Lining-Color' && item.isActive)
          .map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg flex items-center content-center cursor-pointer w-[25vw] space-x-4 xs:relative xs:flex-col xs:h-full xs:w-[33vw]  "
              onClick={() => handleLiningColorClick(item, item.name, item.textureURL, item.price)} // Add onClick event to log the selected lining color
            >
              <img
                className="w-40 h-40 xs:h-20 xs:w-20 xs:mt-[3vh]"
                src={item.textureURL}
                alt={item.name}
              />
              <div>
                <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw]">{item.name}</p>
                <p className="text-sm xs:hidden">{item.price}</p>
              </div>
            </div>
          ))
      }
    </>
  );
};

export default LiningComponent;
