// import React, { useState, useEffect } from 'react';
// import { getEntries } from '../Firebase/userUtil';
// import eventEmitter from './eventEmitter';

// const LiningColor = () => {
//   const [liningData, setLiningData] = useState([]);
//   const [selectedLiningId, setSelectedLiningId] = useState(null);

//   useEffect(() => {
//     getEntries()
//       .then((result) => {
//         setLiningData(result);
//         result.forEach(item => {
//           if (item.category === 'Lining' && item.isActive) {
//             console.log(`Lining Item - Type: ${item.name}, ID: ${item.id}`);
//           }
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleLiningClick = (id, textureURL) => {
//     setSelectedLiningId(id); // Set the selected lining's ID
//     eventEmitter.emit('liningSelected', { textureURL });
//     console.log(textureURL);
//   };

//   return (
//     <>
//       {
//           liningData
//           .filter(item => item.category === 'Lining' && item.isActive)
//           .map((item, index) => (
//               <div
//               key={index}
//               id={item.id}
//               className={`p-4 rounded-lg flex items-center content-center space-x-4 xs:relative xs:flex-col xs:h-full xs:w-[33vw] cursor-pointer ${selectedLiningId === item.id ? 'active' : ''}`}
//               onClick={() => handleLiningClick(item.id, item.textureURL)}
//               >
//               <img
//                 className="w-40 h-40 xs:h-20 xs:w-20 xs:mt-[3vh]"
//                 src={item.textureURL}
//                 alt={item.name}
//                 />
//               <div>
//                 <p className="font-semibold xs:text-[1rem] xs:ml-[-4vw]">{item.name}</p>
//                 <p className="text-sm xs:hidden">{item.id}</p>
//               </div>
//             </div>
//           ))
//         }
//         </>
   
//   );
// }

// export default LiningColor;
