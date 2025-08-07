import React, { useState } from 'react';
import './Card.css';

const cardData = [
  { title: "Product 1", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70" },
  { title: "Product 2", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/b/u/-original-imahadxg2fazkzub.jpeg?q=70" },
  { title: "Product 3", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/p/v/-original-imah4smtqmxb2j2f.jpeg?q=70" },
  { title: "Product 4", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/i/j/-original-imah4k2fteym4hhz.jpeg?q=70" },
  { title: "Product 5", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/0/-original-imah7hynvzxzyzjz.jpeg?q=70" },
  { title: "Product 6", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/6/n/-original-imahcqcwz7msj6rj.jpeg?q=70" },
  { title: "Product 6", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" },
];

function Card() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  const next = () => {
    if (index < cardData.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
     <h1 id='s_id'><a href='#card' id="smart_phone">Smart Phones</a></h1>
    <div id="card" className="slider-wrapper">
      <div className="slider" style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}>
        {cardData.map((card, i) => (
          <div className="card" key={i}>
            <img src={card.image} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prev}>❮</button>
      <button className="arrow right" onClick={next}>❯</button>
    </div>
    </div>
  );
}

export default Card;
