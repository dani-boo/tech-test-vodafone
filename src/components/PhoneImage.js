import React, { Component } from "react";
import spaceGreyImage from "../assets/images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png";
// import goldImage from "../assets/images/Apple_iPhone_8_Space_Gold-full-product-front.png";
// import silverImage from "../assets/images/Apple_iPhone_8_Silver_WS2-full-product-front.png";

class PhoneImage extends Component {
  render() {
    return (
      <div>
        <section className="phone-image-section">
          <img src={spaceGreyImage} className="phone-image" alt="iPhone 8 Space Grey" />
        </section>
      </div>
    );
  }
}

export default PhoneImage;
