// import React, { useState } from "react";

// const Carousel = ({ values, activeValue, setValue }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? values.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === values.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button className="carousel__prev" onClick={handlePrev}>
//         Prev
//       </button>
//       <div className="carousel__content">
//         {values.map((item, index) => (
//           <div
//             key={index}
//             className={`carousel__item ${index === currentIndex ? "carousel__item--active" : ""}`}
//             onClick={() => setValue(item)}
//           >
//             {/* Render item content here */}
//             <div className="item__dot" style={{ backgroundColor: item.color }} />
//             <div className="item__label">{item.name}</div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel__next" onClick={handleNext}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;
