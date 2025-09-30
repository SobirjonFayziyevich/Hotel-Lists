import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating = 4.5, totalStars = 5 }) => {
  // rating - baho (masalan 4.5)
  // totalStars - jami yulduzlar soni (default: 5)

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      // to‘liq yulduz
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      // yarmi to‘ldirilgan yulduz
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      // bo‘sh yulduz
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

export default StarRating;
