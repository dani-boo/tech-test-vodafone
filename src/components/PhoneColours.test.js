import React from "react";
import { shallow } from "enzyme";
import PhoneColours from "./PhoneColours";
import { colourOptions } from "../data";

describe("colour options", () => {
  it("calls its `onSelect` prop when a button is clicked", () => {
    const mockOnSelect = jest.fn();
    const wrapper = shallow(
      <PhoneColours
        colourOptions={colourOptions}
        selected={colourOptions[0].colourName}
        onSelect={mockOnSelect}
      />
    );
    wrapper
      .find(".button")
      .at(0)
      .props()
      .onClick();
    expect(mockOnSelect).toHaveBeenCalled();
  });

  it("highlights the button for the currently selected colour", () => {
    const wrapper = shallow(
      <PhoneColours
        colourOptions={colourOptions}
        selected={colourOptions[1].colourName}
        onSelect={() => {}}
      />
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
    expect(
      wrapper
        .find(".button")
        .at(2)
        .props()
        .className.includes("selected")
    ).toEqual(false);
  });
});
