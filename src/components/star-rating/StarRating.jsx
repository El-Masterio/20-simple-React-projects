import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';
const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0); //for the rating to be saved after clicking
  const [hover, setHover] = useState(0); // to update value of hovered on elements on hover

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index++; // because we want the index to start at 1
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
