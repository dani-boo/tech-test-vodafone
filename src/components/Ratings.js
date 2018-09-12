import React from "react";

const userRating = 5;

const Ratings = () => (
  <div>
    <ul className="stars" title={`Rated ${userRating} stars`}>
      {[1, 2, 3, 4, 5].map(rating => (
        <li key={rating} className={`star-${userRating >= rating ? "gold" : "grey"}`}>
          {userRating >= rating ? "★" : "☆"}
        </li>
      ))}
    </ul>
  </div>
);

export default Ratings;
