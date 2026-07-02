import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './components-css/ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // full-screen viewer state
  const [expandedImage, setExpandedImage] = useState(null);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* MAIN SLIDER */}
      <div className={`image-slider ${expandedImage ? "no-bg" : ""}`}>
        <button className="slider-button left" onClick={goPrev}>
          <ChevronLeft size={20} />
        </button>

        <img
          src={images[currentIndex]}
          alt="Skatepark"
          className="slider-image"
          onClick={() => setExpandedImage(images[currentIndex])}
        />

        <button className="slider-button right" onClick={goNext}>
          <ChevronRight size={20} />
        </button>

        <div className="slider-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* FULL-SCREEN IMAGE VIEWER */}
      {expandedImage && (
        <div
          className="image-viewer-overlay"
          onClick={() => setExpandedImage(null)}
        >
          <div className="image-viewer-box">
            <img
              src={expandedImage}
              alt="Expanded view"
              className="image-viewer-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
