import React, { Component } from "react";

const chosenColour = "Space Grey";

class PhoneColours extends Component {
  render() {
    return (
      <div className="colour-options">
        <label htmlFor="Colour options: ">
          Colour: <strong className="bold-text">{chosenColour}</strong>
        </label>
        <br />
        <span onChange={event => this.setState({ colour: event.target.value })}>
          <button className="button button-gold" onClick={() => this.chooseColour()} />
          <button className="button button-silver" onClick={() => this.chooseColour()} />
          <button className="button button-space-grey" onClick={() => this.chooseColour()} />
        </span>
      </div>
    );
  }
}

export default PhoneColours;
