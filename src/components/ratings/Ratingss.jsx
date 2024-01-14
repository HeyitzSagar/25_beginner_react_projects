import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ratings.css";
const Ratingss = ({ noOfStars = 5 }) => {
  const [ratingss, setRatingss] = useState(0);

  function HandleClick(currentIndex) {
    setRatingss(currentIndex);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= ratingss ? "active" : "inactive"}
            onClick={() => HandleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Ratingss;
