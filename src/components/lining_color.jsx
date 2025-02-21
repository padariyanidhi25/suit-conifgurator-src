import React, { useState, useEffect } from 'react';
import { getEntries } from '../Firebase/userUtil';
import eventEmitter from './eventEmitter';

const LiningComponent = () => {
  const [userData, setUserData] = useState([]);
  const [selectedLiningColor, setSelectedLiningColor] = useState(null);
  const [selectedLiningColorPrice, setSelectedLiningPrice] = useState(null);
  const [selectedLiningColorUrl, setSelectedLiningColorUrl] = useState(null);

  useEffect(() => {
    getEntries()
      .then((result) => {
        setUserData(result);

        const saveLiningColor = localStorage.getItem('LiningColor');
        const savedLiningColorPrice = localStorage.getItem('LiningColorPrice');
        const savedLiningColorURL = localStorage.getItem('LiningColorURL');

        if (saveLiningColor) {
          setSelectedLiningColor(saveLiningColor);
        }
        if (savedLiningColorPrice) {
          setSelectedLiningPrice(savedLiningColorPrice);
        }
        if (savedLiningColorURL) {
          setSelectedLiningColorUrl(savedLiningColorURL);
        }
      })
      .catch((err) => {
        console.error("Error fetching data from Firebase:", err); // Log any errors
      });
  }, []);

  const handleLiningColorClick = (item, name, textureURL, price) => {
    // Remove previously stored values if they exist
    if (selectedLiningColor) {
      localStorage.removeItem('LiningColor');
    }
    if (selectedLiningColorPrice) {
      localStorage.removeItem('LiningColorPrice');
    }
    if (selectedLiningColorUrl) {
      localStorage.removeItem('LiningColorURL');
    }

    // Set the new selected values
    setSelectedLiningColor(name);
    setSelectedLiningPrice(price);
    setSelectedLiningColorUrl(textureURL);

    localStorage.setItem('LiningColor', name);
    localStorage.setItem('LiningColorPrice', price);
    localStorage.setItem('LiningColorURL', textureURL);

    // Emit event
    eventEmitter.emit('applyLiningColor', { textureURL, price });
  };

  return (
    <>
      {userData
        .filter(item => item.category === 'Lining-Color' && item.isActive)
        .map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex items-center content-center cursor-pointer w-[25vw] space-x-4 xs:relative xs:flex-col xs:h-full xs:w-[33vw]"
            onClick={() => handleLiningColorClick(item, item.name, item.textureURL, item.price)} //  onClick event to  selected lining color
          >
            <img
              className="w-40 h-40 xs:h-20 xs:w-20 xs:mt-[3vh]"
              src={item.thumbnailURL} // Show thumbnailURL to user
              alt={item.name}
            />
            <div>
              <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw]">{item.name}</p>
              <p className="text-sm xs:hidden">${item.price}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default LiningComponent;
