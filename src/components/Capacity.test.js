import React from "react";
import { shallow } from "enzyme";
import Capacity from "./Capacity";
import { memoryOptions } from "../data";

describe("capacity options", () => {
  it("calls its `onSelect` prop when a button is clicked", () => {
    const mockOnSelect = jest.fn();
    const wrapper = shallow(
      <Capacity selected={memoryOptions[0]} onSelect={mockOnSelect} memoryOptions={memoryOptions} />
    );
    wrapper
      .find(".button")
      .at(0)
      .props()
      .onClick();
    expect(mockOnSelect).toHaveBeenCalled();
  });

  it("highlights the button for the currently selected capacity", () => {
    const wrapper = shallow(
      <Capacity selected={memoryOptions[1]} onSelect={() => ""} memoryOptions={memoryOptions} />
    );
    expect(
      wrapper
        .find(".button")
        .at(0)
        .props()
        .className.includes("selected")
    ).toEqual(false);
    expect(
      wrapper
        .find(".button")
        .at(1)
        .props()
        .className.includes("selected")
    ).toEqual(true);
  });
});
