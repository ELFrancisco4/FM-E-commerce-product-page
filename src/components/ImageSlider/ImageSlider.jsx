/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ images, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    // eslint-disable-next-line react/prop-types
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="product-image-slider" onClick={onClick}>
      <button onClick={goToPrevious} className="left-arrow">
        <IoIosArrowBack />
      </button>
      <div className="product-image">
        <img src={images[currentIndex]} alt="Sneakers" />
      </div>
      <button onClick={goToNext} className="right-arrow">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ImageSlider;
