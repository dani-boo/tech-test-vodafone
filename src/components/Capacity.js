import React, { Component } from "react";

const chosenCapacity = "64";

class Capacity extends Component {
  render() {
    return (
      <div className="capacity-options">
        <label htmlFor="Capacity options: ">
          Capacity: <strong>{chosenCapacity}</strong>
        </label>
        <br />
        <span onChange={event => this.setState({ capacity: event.target.value })}>
          <button className="button button-gigs" id="64" onClick={() => this.chooseCapacity()}>
            64
          </button>
          <button className="button button-gigs" id="256" onClick={() => this.chooseCapacity()}>
            256
          </button>
        </span>
      </div>
    );
  }
}

export default Capacity;
