import React, { useState, useEffect, useRef } from 'react';
import './PhotoSlider.css'; // Import CSS file
import image1 from './assets/image1.png';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';


const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images
  const images = [
    image1,image2,image3,image4,image5,image6,image7
  ];

  // Refs for slider container and images
  const sliderContainerRef = useRef(null);
  const imageRefs = useRef([]);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Use useEffect to set up automatic sliding
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Calculate image width based on slider container width
  const imageWidth = sliderContainerRef.current
    ? sliderContainerRef.current.offsetWidth
    : 0;

  return (
    <div className="photo-slider-container" ref={sliderContainerRef} id="home">

      <div
        className="photo-slider"
        style={{
          transform: `translateX(-${currentIndex * imageWidth}px)`,
          width: `${images.length * imageWidth}px`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-wrapper" style={{ width: `${imageWidth}px` }}>
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            ref={(el) => (imageRefs.current[index] = el)}
            style={{ width: `${imageWidth}px` }}
          />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="prev-slide" onClick={prevSlide}>
      &#x27A4;
      </button>
      <button className="next-slide" onClick={nextSlide}>
      &#x27A4;
      </button>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;