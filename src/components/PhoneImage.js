import React from "react";
import PropTypes from "prop-types";

const PhoneImage = ({ src, alt }) => (
  <div>
    <section className="phone-image-section">
      <img src={src} className="phone-image" alt={alt} />
    </section>
  </div>
);

PhoneImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PhoneImage;
