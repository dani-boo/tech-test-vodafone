import React, { Component } from "react";
import PhoneImage from "./PhoneImage";
import Ratings from "./Ratings";
import PhoneColours from "./PhoneColours";
import Capacity from "./PhoneColours";
import Pricing from "./Pricing";
import "../App.css";

// import jsonData from "./phones.json";

// const loadData = () => JSON.parse(JSON.stringify(jsonData));

const currentProduct = "Apple iPhone 8";
const chosenColour = "Space Grey";
const chosenCapacity = "64";

class App extends Component {
  constructor() {
    super();

    this.state = {
      colour: chosenColour,
      capacity: chosenCapacity,
    };
  }

  chooseColour() {
    const { colour } = this.state;
    this.setState({ colour });
  }

  chooseCapacity() {
    const { capacity } = this.state;
    this.setState({ capacity });
  }

  render() {
    return (
      <div>
        <PhoneImage />
        <section className="phone-content-section">
          <h1 title={`Phone on display: ${currentProduct}`}>Apple iPhone 8</h1>
        </section>
        <section className="phone-content-section">
          <Ratings />
          <p>
            All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip.
            Intelligence never looked better.
          </p>
          <div className="features">
            <PhoneColours />
            <Capacity />
            <Pricing />
          </div>
        </section>
      </div>
    );
  }
}

// const { chosenColour, chosenCapacity, currentProduct, userRating, currentUpfrontCost, currentMonthlyCost } = newFunction();

// export default App;
// function newFunction() {
//   const currentProduct = "Apple iPhone 8";
//   const userRating = 5;
//   const chosenColour = "Space Grey";
//   const chosenCapacity = "64";
//   const currentUpfrontCost = "£1149";
//   const currentMonthlyCost = "£43.20 ";
//   return { chosenColour, chosenCapacity, currentProduct, userRating, currentUpfrontCost, currentMonthlyCost };
// }

export default App;
