import React, { useState } from 'react';
import './components-css/ImageSlider.css';
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react';

export default function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="image-slider">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slider-button" onClick={prevImage} style={{ left: 0 }}>
                <ArrowBigLeft />
            </button>
            <button className="slider-button" onClick={nextImage} style={{ right: 0 }}>
                <ArrowBigRight />
            </button>
        </div>
    );
}