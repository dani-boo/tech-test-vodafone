import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import image from "./assets/images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png";
import "./App.css";

// Remove this
const userRating = 5;
const chosenColour = "Space Grey";
const chosenCapacity = "64";
const currentUpfrontCost = "£1149";
const currentMonthlyCost = "£43.20 ";

class App extends Component {
  render() {
    return (
      <div>
        <section className="phone-image-section">
          <img src={image} className="phone-image" alt="iPhone 8 Space Grey" />
        </section>
        <section className="phone-content-section">
          <h1>Apple iPhone 8</h1>
        </section>
        <section className="phone-content-section">
          <ul className="stars" title={`Rated ${userRating} stars`}>
            {[1, 2, 3, 4, 5].map(rating => (
              <li key={rating} className={`star-${userRating >= rating ? "gold" : "grey"}`}>
                {userRating >= rating ? "★" : "☆"}
              </li>
            ))}
          </ul>
          <p>
            All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip.
            Intelligence never looked better.
          </p>
          <div className="features">
            <div className="colour-options">
              <label>
                Colour: <strong className="bold-text">{chosenColour}</strong>
              </label>
              <br />
              <span>
                <button className="button button-gold" />
                <button className="button button-silver" />
                <button className="button button-space-grey" />
              </span>
            </div>
            <div className="capacity-options">
              <label>
                Capacity: <strong>{chosenCapacity}</strong>
              </label>
              <br />
              <span>
                <button className="button button-gigs" id="64">
                  64
                </button>
                <button className="button button-gigs" id="256">
                  256
                </button>
              </span>
            </div>
            <table className="table">
              <tbody className="pricing-options">
                <tr className="table-top" />
                <tr>
                  <td className="vertical-line">
                    from <span className="upfront-cost">{currentUpfrontCost}</span> upfront cost{" "}
                  </td>
                  <td>
                    {" "}
                    When you pay <span className="monthly-cost">{currentMonthlyCost}</span> a<br />{" "}
                    month
                  </td>
                </tr>
                <tr className="table-bottom" />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
