import React, { useState, useEffect } from "react";
import { getEntries } from "../Firebase/userUtil";
import eventEmitter from "./eventEmitter";

const TBtnsComp = () => {
  const [userData, setUserData] = useState([]);
  const [selectedtButtonName, setSelectedtButtonName] = useState(null); // State to track the selected button's name

  useEffect(() => {
    getEntries()
      .then((result) => {
        setUserData(result);
        result.forEach((item) => {
          if (item.category === "Button" && item.isActive) {
            // console.log(`Button Item - Type: ${item.name}, Price: ${item.price}`);
          }
        });

        // Load the previously selected button from local storage
        const savedButtontName = localStorage.getItem("ButtontName");
        if (savedButtontName) {
          setSelectedtButtonName(savedButtontName);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleButtonClick = (id, name, textureURL, price) => {
    // Store the previously selected button if it exists
    if (selectedtButtonName) {
      localStorage.removeItem("ButtonName");
    }

    // Set the new selected button
    setSelectedtButtonName(name);
    localStorage.setItem("ButtonName", name);

    // Emit event
    eventEmitter.emit("buttonSelected", { textureURL, price });
    console.log(name, textureURL, price);
  };

  return (
    <>
      {userData
        .filter((item) => item.category === "Button" && item.isActive)
        .map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`bt p-4 flex flex-row xs:flex-col rounded-lg cursor-pointer w-[25vw] content-center items-center ${
              selectedtButtonName === item.name ? "active" : ""
            }`}
            onClick={() =>
              handleButtonClick(item.id, item.name, item.textureURL, item.price)
            }>
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
        ))}
    </>
  );
};

export default TBtnsComp;
