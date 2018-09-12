import React from "react";
import PropTypes from "prop-types";

const Ratings = ({ rating }) => (
  <div>
    <ul className="stars" title={`Rated ${rating} stars`}>
      {[1, 2, 3, 4, 5].map(star => (
        <li key={star} className={`star-${Math.ceil(rating) >= star ? "gold" : "grey"}`}>
          {Math.ceil(rating) >= star ? "★" : "☆"}
        </li>
      ))}
    </ul>
  </div>
);

export const ratingShape = PropTypes.number.isRequired;

Ratings.propTypes = {
  rating: ratingShape,
};

export default Ratings;
