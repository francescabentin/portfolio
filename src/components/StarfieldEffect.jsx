import React, { useState, useEffect } from 'react';
import '../styles/StarfieldEffect.scss';

const StarfieldEffect = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numberOfStars = 150;
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${Math.random() * 2 + 0.5}s`,
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="starfield">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.duration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarfieldEffect;
