// import React, { useState, useEffect } from 'react';
// import { getEntries } from '../Firebase/userUtil';

// const LiningComponent = () => {
//   const [userData, setUserData] = useState([]);

//   const [liningData, setLiningData] = useState([]);

//   useEffect(() => {
//     getEntries()
//       .then((result) => {
//         setUserData(result);
//         result.forEach(item => {
//           if (item.category === 'Lining-Color' && item.isActive) {
//             console.log(`color Item - Type: ${item.name}, Price: ${item.price}`);
//           }
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//  console.log(userData.filter(item => item.category === 'Lining-Color' && item.isActive));

//   return (
//     <>

//       {

//         userData
//           .filter(item => item.category === 'Lining-Color' && item.isActive)
//           .map((item, index) => {
//             <div
//               key={index}
//               className="p-4 rounded-lg flex items-center content-center space-x-4 xs:relative xs:flex-col xs:h-full xs:w-[33vw]"
//             >
//               <img
//                 className="w-40 h-40 xs:h-20 xs:w-20 xs:mt-[3vh]"
//                 src={item.textureURL}
//                 alt={item.name}
//               />
//               <div>
//                 <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw]">{item.name}</p>
//                 <p className="text-sm xs:hidden">{item.price}</p>
//               </div>
//             </div>

//           })}
//     </>
//   );
// };

// export default LiningComponent;
