import React, { useState, useEffect } from 'react';
import '../App.css';
// import CommentSection from './CommentSection';

const PictureFrame = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    'images/image1.JPG',
    'images/image2.JPG',
    'images/image3.JPG',
    'images/image4.JPG',
    'images/image5.JPG',
    'images/image6.JPG',
    'images/image6.JPG'
  ];

  const nextImage = () => setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  const prevImage = () => setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  const togglePause = () => setIsPaused(!isPaused);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setTimeout(() => nextImage(), 5000);
    }
    return () => clearTimeout(timer);
  }, [currentImage, isPaused]);

  return (
    <div className="button-container">
      <div className="quote-box">
        <p>"The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope."</p>
        <p className="author-subscript">- Barack Obama</p>
      </div>
      <button className="chevron-button left" onClick={prevImage}>
        <img src="/svg/chevron-left-circle-svgrepo-com.svg" alt="Previous" />
      </button>
      <div className="frame">
        <div className="image-container">
          <img src={images[currentImage]} alt="Digital Frame" style={{ width: '100%' }} />
        </div>
      </div>
      <button className="chevron-button right" onClick={nextImage}>
        <img src="/svg/chevron-right-circle-svgrepo-com.svg" alt="Next" />
      </button>
      <button className="pause-button" onClick={togglePause}>
        <img src={isPaused ? "/svg/play-svgrepo-com.svg" : "/svg/pause-alt-svgrepo-com.svg"} alt="Pause/Resume" />
      </button>
    </div>
  );
};

export default PictureFrame;
