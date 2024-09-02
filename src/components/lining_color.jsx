import React, { useState, useEffect } from 'react';
import { getEntries } from '../Firebase/userUtil';

const LiningComponent = () => {
    const [userData, setUserData] = useState([]);

  const [liningData, setLiningData] = useState([]);

  useEffect(() => {
    getEntries()
      .then((result) => {
        setUserData(result);
        result.forEach(item => {
          if (item.category === 'Lining-Color' && item.isActive) {
            console.log(`color Item - Type: ${item.name}, Price: ${item.price}`);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

//   useEffect(() => {
//     console.log('LiningComponent mounted, fetching data...');
    
//     getEntries()
//       .then((result) => {
//         console.log('Data fetched from Firebase:', result);
        
//         // Filter the result for Lining category
//         const filteredData = result.filter(item => item.category === 'Lining' && item.isActive);
//         setLiningData(filteredData);
        
//         console.log('Filtered Lining Data:', filteredData);
//       })
//       .catch((err) => {
//         console.error('Error fetching data from Firebase:', err);
//       });
//   }, []);

  return (
    <> {
        userData
          .filter(item => item.category === 'liningcolor' && item.isActive)
      .map((item, index) => {
        // Log the name and price of each item
        // console.log(`Rendering Lining Item - Name: ${item.name}, Price: ${item.price}`);
       
        
        return (
          <div
            key={index}
            className="p-4 rounded-lg flex items-center content-center space-x-4 xs:relative xs:flex-col xs:h-full xs:w-[33vw]"
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
        );
      })}
    </>
  );
};

export default LiningComponent;
