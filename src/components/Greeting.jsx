// src/components/Greeting.jsx

import React from 'react';
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

const Greeting = () => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 6 && currentHour <= 11) {
        return { text: 'Good Morning!', image: dayImage };
      } else if (currentHour >= 12 && currentHour <= 16) {
        return { text: 'Good Afternoon!', image: dayImage };
      } else if (currentHour >= 17 && currentHour <= 20) {
        return { text: 'Good Evening!', image: eveningImage };
      } else {
        return { text: 'Good Night!', image: nightImage };
      }
    };
  
    const { text, image } = getCurrentGreeting();
  
    return (
      <h1 className="greeting">
        <img src={image} alt={text} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        {text}
      </h1>
    );
  };
  
  export default Greeting;