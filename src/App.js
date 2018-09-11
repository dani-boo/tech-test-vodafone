import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import image from "./assets/images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png";
import "./App.css";

// Remove this
const userRating = 5;
const chosenColour = "Space Grey";

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
          <div className="colour-options">
            <label>
              Colour: <strong className="bold-text">{chosenColour}</strong>
            </label>
            <br />
          </div>
          <span>
            <button className="button button-gold" />
            <button className="button button-silver" />
            <button className="button button-space-grey" />
          </span>
        </section>
      </div>
    );
  }
}

export default App;
