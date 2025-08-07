import './Middle.css'

import React, { useState } from 'react';

const images = [    
  "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f235156dfda554f5.jpg?q=80",
  "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c9c7b904fae51a5a.jpg?q=80",
  "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d445d7806719681f.jpeg?q=80"
];

function Middle() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <button className="left-arrow" onClick={prevSlide}>❮</button>
      <div className="slide">
        <img src={images[current]} alt={`Slide ${current + 1}`} />
      </div>
      <button className="right-arrow" onClick={nextSlide}>❯</button>
    </div>
  );
}



export default Middle;

    
