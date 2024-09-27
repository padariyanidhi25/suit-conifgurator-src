import React, { useState, useEffect } from 'react';
import { getEntries } from '../Firebase/userUtil';
import eventEmitter from './eventEmitter';

const BtnsComp = () => {
  const [userData, setUserData] = useState([]);
  const [selectedButtonName, setSelectedButtonName] = useState(null); // State to track the selected button's name
  const [selectedButtonPrice, setSelectedButtonPrice] = useState(null); 
  const [selectedButtonURL, setSelectedButtonURL] = useState(null);

  useEffect(() => {
    getEntries()
      .then((result) => {
        setUserData(result);
        result.forEach(item => {
          if (item.category === 'Button' && item.isActive) {
            // console.log(`Button Item - Type: ${item.name}, Price: ${item.price}`);
          }
        });

        // Load the previously selected button from local storage
        const savedButtonName = localStorage.getItem('ButtonName');
        const savedButtonPrice = localStorage.getItem('ButtonPrice');
        const savedButtonURL = localStorage.getItem('ButtonURL');
        if (savedButtonName) {
          setSelectedButtonName(savedButtonName);
        }
        if (savedButtonPrice) {
          setSelectedButtonPrice(savedButtonPrice);
        }
        if (savedButtonURL) {
          setSelectedButtonURL(savedButtonURL);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleButtonClick = (id, name, textureURL, price) => {
    // Store the previously selected button if it exists
    if (selectedButtonName) {
      localStorage.removeItem('ButtonName');
    }
    if (selectedButtonPrice) {
      localStorage.removeItem('ButtonPrice');
    }

    if (selectedButtonURL) {
      localStorage.removeItem('ButtonURL');
    }


    // Set the new selected button
    setSelectedButtonName(name);
    setSelectedButtonPrice(price);
    setSelectedButtonURL(textureURL);

    localStorage.setItem('ButtonName', name);
    localStorage.setItem('ButtonPrice', price);
    localStorage.setItem('ButtonURL', textureURL);
    // Emit event
    eventEmitter.emit('buttonSelected', { textureURL, price });
    console.log(name, textureURL, price);
  };

  return (
    <>
      {
        userData
          .filter(item => item.category === 'Button' && item.isActive)
          .map((item, index) => (
            <div
              key={index}
              id={item.id}
              className={`bt p-4 flex flex-row xs:flex-col rounded-lg cursor-pointer w-[25vw] content-center items-center ${selectedButtonName === item.name ? 'active' : ''}`}
              onClick={() => handleButtonClick(item.id, item.name, item.textureURL, item.price)}
            >
              <img
                src={item.textureURL}
                alt="Button"
                className="w-40 h-40 object-contain xs:h-20"
              />
              <div>
                <p className="mt-[0vw] ml-[2.7vw] xs:text-[0.8rem] xs:ml-0 xs:w-[10vw] xs:text-nowrap xs:overflow-hidden">
                  {item.name}
                </p>
                <p className="text-gray-600 mt-[0vw] ml-[2.7vw] xs:text-[0.8rem] xs:ml-0 xs:w-[10vw] xs:text-nowrap xs:overflow-hidden">
                  ${item.price}
                </p>
              </div>
            </div>
          ))
      }
    </>
  );
}

export default BtnsComp;
