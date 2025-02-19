import React, { useState, useEffect } from "react";
import { getEntries } from "../Firebase/userUtil";
import eventEmitter from "./eventEmitter";

const FabComp = () => {
  const [userData, setUserData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedFabricPrice, setSelectedFabricPrice] = useState(null);

  useEffect(() => {
    getEntries()
      .then((result) => {
        setUserData(result);
        // console.log(result);
        

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowDropdown(true);
  };

  const handleFabricClick = (item) => {
    setSelectedFabric(item);
    setSelectedFabricPrice(item.price);
    eventEmitter.emit("fabricSelected", item); // Emit event with selected fabric price
    // console.log("Selected Fabric Texture URL:", item.textureURL); 
    // console.log("Selected Fabric Texture URL:", item.name); 


    // Log the texture URL when a fabric is selected
    // console.log("Selected Fabric Texture URL:", item.textureURL); // Use textureURL

    // Save the newly selected fabric name and texture URL to localStorage
    saveSelectedFabricName(item);
    // console.log("fabricselected");
  };

  const handleConfirmClick = () => {
    if (selectedFabric) {
      // console.log(
      //   `Confirmed Fabric - Name: ${selectedFabric.name}, Price: ${selectedFabricPrice}`
      // );
    }
    setShowDropdown(false);
    setSelectedCategory(null);
    setSelectedFabric(null);
    setSelectedFabricPrice(null);
  };

  const saveSelectedFabricName = (item) => {
    // Save only the fabric name and texture URL to localStorage
    localStorage.setItem("selectedFabricName", item.name);
    console.log("selectedFabricName", item.name);
    
    localStorage.setItem("selectedFabricURL", item.textureURL);
    localStorage.setItem("selectedFabricName", item.name);

    localStorage.setItem("selectedFabricPrice", item.price);
  };

  const allFabricsThumbnailURL = userData.find(
    (item) => item.category === "Fabric" && item.isActive
  )?.thumbnailURL;

  const getLatestFabrics = (items) => {
    const latestFabrics = {};
    items.forEach((item) => {
      if (
        !latestFabrics[item.type] ||
        new Date(item.dateAdded) > new Date(latestFabrics[item.type].dateAdded)
      ) {
        latestFabrics[item.type] = item;
      }
    });
    return Object.values(latestFabrics);
  };

  const latestFabricItems = getLatestFabrics(
    userData.filter((item) => item.category === "Fabric" && item.isActive)
  );

  const filteredItems =
    selectedCategory === "All Fabrics"
      ? userData.filter((item) => item.category === "Fabric" && item.isActive)
      : userData.filter(
          (item) =>
            item.type === selectedCategory &&
            item.category === "Fabric" &&
            item.isActive
        );

  return (
    <>
      {/* Default "All Fabrics" div */}
      <div
        className="p-4 rounded-lg flex items-center content-center space-x-4 cursor-pointer xs:relative xs:flex-col xs:h-full xs:w-[33vw] active"
        onClick={() => handleCategoryClick("All Fabrics")}
      >
        <img
          className="w-40 h-40 object-contain xs:h-full"
          src={allFabricsThumbnailURL} // Show thumbnailURL
          alt="All Fabrics"
        />
        <div>
          <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw] xs:w-[20vw] xs:text-nowrap xs:overflow-hidden">
            All Fabrics
          </p>
        </div>
      </div>

      {/* Fabric items */}
      {!showDropdown &&
        latestFabricItems.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className="p-4 rounded-lg flex items-center content-center space-x-4 cursor-pointer xs:relative xs:flex-col xs:h-full xs:w-[33vw] active"
            onClick={() => handleCategoryClick(item.type)}
          >
            <img
              className="w-40 h-40 object-contain xs:h-full"
              src={item.thumbnailURL} // Show thumbnailURL
              alt="Fabric"
            />
            <div>
              <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw] xs:w-[20vw] xs:text-nowrap xs:overflow-hidden">
                {item.type}
              </p>
            </div>
          </div>
        ))}

      {/* Dropdown menu */}
      {showDropdown && (
        <div
          id="dropdown-menu"
          className="absolute bg-white p-3 mt-[-6vh] flex flex-col z-10 top-[7vh] left-minus-1vw h-full-110 w-screen xs:flex-row xs:mt-[-5vh] xs:h-[30vh] xs:w-[33rem]"
          style={{ display: "flex" }}
        >
          {filteredItems.map((item, index) => {
            const isActive = selectedFabric && selectedFabric.id === item.id; // Check if this fabric is selected
            return (
              <div
                key={index}
                id={`fabric${index + 1}`}
                className={`fab p-4 w-[23vw] flex flex-row content-center rounded-lg cursor-pointer items-center xs:w-[7rem] xs:h-[9rem] xs:flex-col ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleFabricClick(item)} // Set selected fabric on click
              >
                <img
                  src={item.thumbnailURL} // Show thumbnailURL
                  alt={`Fabric ${index + 1}`}
                  className="w-40 h-40 xs:w-20 xs:h-20"
                />
                <div>
                  <p className="fabrics xs:text-[1rem] xs:ml-0 xs:w-[10vw] xs:text-nowrap xs:overflow-hidden">
                    {item.name}
                  </p>
                  <p className="text-gray-600 ml-[2vw] xs:text-[0.8rem] xs:ml-0 xs:w-[10vw] xs:text-nowrap xs:overflow-hidden">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Confirm button */}
      {showDropdown && (
        <div className="fixed z-[99] left-[78vw] bottom-[2vh] xs:left-[72vw] xs:bottom-[20vh]">
          <button
            style={{ backgroundColor: "#2d2d2c" }}
            className="relative rounded-full w-[20vw] h-10 font-semibold text-lg xs:text-[0.8rem] xs:w-[12vw] xs:ml-[14vw]"
            onClick={handleConfirmClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="white"
              className="w-6 h-6 absolute top-[1vh] left-[6vw] xs:w-auto transform -translate-x-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span className="text-white xs:hidden">Confirm</span>
          </button>
        </div>
      )}
    </>
  );
};

export default FabComp;