import React, { Component } from "react";
import PropTypes from "prop-types";

import PhoneImage from "./PhoneImage";
import Ratings from "./Ratings";
import PhoneColours from "./PhoneColours";
import Capacity from "./PhoneColours";
import Pricing from "./Pricing";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPhone: props.phones[0],
      colourName: props.phones[0].colourName,
      memory: props.phones[0].memory,
    };
  }

  chooseColour = colourName => {
    this.setState(() => ({ colourName }));
  };

  chooseCapacity = memory => {
    this.setState(() => ({ memory }));
  };

  render() {
    const { phoneName, rating } = this.props;
    const { selectedPhone, colourName, memory } = this.state;
    return (
      <div>
        <PhoneImage />
        <section className="phone-content-section">
          <h1>{phoneName}</h1>
          <Ratings rating={rating} />
          <p>{selectedPhone.displayDescription}</p>
          <div className="features">
            <PhoneColours selected={colourName} />
            <Capacity selected={memory} />
            <Pricing />
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  rating: PropTypes.number.isRequired,
  phoneName: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      deviceId: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      displayDescription: PropTypes.string.isRequired,
      colourName: PropTypes.string.isRequired,
      colourHex: PropTypes.string.isRequired,
      memory: PropTypes.string.isRequired,
      leadPlanId: PropTypes.string.isRequired,
      merchandisingMedia: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
      priceInfo: PropTypes.shape({
        bundlePrice: PropTypes.shape({
          bundleId: PropTypes.string.isRequired,
          monthlyPrice: PropTypes.shape({
            gross: PropTypes.string.isRequired,
            net: PropTypes.string.isRequired,
            vat: PropTypes.string.isRequired,
          }),
          monthlyDiscountPrice: PropTypes.shape({
            gross: PropTypes.string,
            net: PropTypes.string,
            vat: PropTypes.string,
          }),
        }),
        hardwarePrice: PropTypes.shape({
          hardwareId: PropTypes.string.isRequired,
          oneOffPrice: PropTypes.shape({
            gross: PropTypes.string.isRequired,
            net: PropTypes.string.isRequired,
            vat: PropTypes.string.isRequired,
          }),
          oneOffDiscountPrice: PropTypes.shape({
            gross: PropTypes.string,
            net: PropTypes.string,
            vat: PropTypes.string,
          }),
        }),
      }),
    })
  ).isRequired,
};

export default App;
