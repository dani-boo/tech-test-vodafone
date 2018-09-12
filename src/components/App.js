import React, { Component } from "react";
import PropTypes from "prop-types";

import PhoneImage from "./PhoneImage";
import Ratings from "./Ratings";
import PhoneColours from "./PhoneColours";
import Capacity from "./Capacity";
import Pricing, { priceInfoShape } from "./Pricing";
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

  selectPhone = () => {
    const { phones } = this.props;
    this.setState(state => ({
      selectedPhone:
        phones.find(
          phone => phone.colourName === state.colourName && phone.memory === state.memory
        ) || phones[0],
    }));
  };

  chooseColour = colourName => {
    this.setState(() => ({ colourName }));
    this.selectPhone();
  };

  chooseCapacity = memory => {
    this.setState(() => ({ memory }));
    this.selectPhone();
  };

  render() {
    const { phoneName, rating } = this.props;
    const { selectedPhone, colourName, memory } = this.state;
    return (
      <div>
        <PhoneImage
          src={selectedPhone.merchandisingMedia[0].value}
          alt={selectedPhone.displayName}
        />
        <section className="phone-content-section">
          <h1>{phoneName}</h1>
          <Ratings rating={rating} />
          <p>{selectedPhone.displayDescription}</p>
          <div className="features">
            <PhoneColours selected={colourName} />
            <Capacity selected={memory} />
            <Pricing priceInfo={selectedPhone.priceInfo} />
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
      priceInfo: priceInfoShape,
    })
  ).isRequired,
};

export default App;
