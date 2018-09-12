import React from "react";
import PropTypes from "prop-types";

const PhoneColours = ({ colourOptions, selected, onSelect }) => (
  <div className="colour-options">
    <label htmlFor="Colour options: ">
      Colour: <strong className="bold-text">{selected}</strong>
    </label>
    <br />
    {colourOptions.map(colour => (
      <button
        key={colour.colourName}
        className={`button ${selected === colour.colourName ? "selected" : ""}`}
        style={{ backgroundColor: colour.colourHex }}
        onClick={() => onSelect(colour.colourName)}
      />
    ))}
  </div>
);

export const colourOptionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    colourName: PropTypes.string.isRequired,
    colourHex: PropTypes.string.isRequired,
  })
).isRequired;

PhoneColours.propTypes = {
  selected: PropTypes.string.isRequired,
  colourOptions: colourOptionsShape,
  onSelect: PropTypes.func.isRequired,
};

export default PhoneColours;
