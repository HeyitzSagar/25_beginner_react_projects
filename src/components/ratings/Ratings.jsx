import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './ratings.css'
const Ratings = ({ noOfStars = 5 }) => {
  const [ratings, setRatings] = useState(0);
  const [hover, setHover] = useState(0);

  function HandleClick(currentIndex) {
    setRatings(currentIndex);
}

  function HandleMouseEnter(currentIndex) {
    setHover(currentIndex);
}
  function HandleMouseLeave() {
    setHover(ratings);
}

  return (
    <div className="star-ratings">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || ratings) ? "active" : "inactive"}
            onClick={() => HandleClick(index)}
            onMouseLeave={() => HandleMouseLeave()}
            onMouseMove={() => HandleMouseEnter(index)}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default Ratings;
