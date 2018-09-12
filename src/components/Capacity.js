import React from "react";
import PropTypes from "prop-types";

const Capacity = ({ selected, onSelect, memoryOptions }) => (
  <div className="capacity-options">
    <label htmlFor="Capacity options: ">
      Capacity: <strong>{selected}</strong>
    </label>
    <div>
      {memoryOptions.map(memory => (
        <button
          key={memory}
          className={`button button-gigs ${memory === selected ? "selected" : ""}`}
          onClick={() => onSelect(memory)}
        >
          {parseInt(memory)}
        </button>
      ))}
    </div>
  </div>
);

export const memoryOptionsShape = PropTypes.arrayOf(PropTypes.string).isRequired;

Capacity.propTypes = {
  selected: PropTypes.string.isRequired,
  memoryOptions: memoryOptionsShape,
  onSelect: PropTypes.func.isRequired,
};

export default Capacity;
