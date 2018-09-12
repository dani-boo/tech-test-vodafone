import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { rating, phoneName, phones, colourOptions, memoryOptions } from "../data";

describe("App", () => {
  const app = shallow(
    <App
      rating={rating}
      phoneName={phoneName}
      phones={phones}
      colourOptions={colourOptions}
      memoryOptions={memoryOptions}
    />
  );
  const desiredPhone = phones[2];
  const otherDesiredPhone = phones[4];

  it("has a phone content section", () => {
    expect(app.find(".phone-content-section").exists()).toBe(true);
  });

  describe("section 2: phone content", () => {
    it("renders the phone name", () => {
      expect(app.find("h1").text()).toEqual("Apple iPhone 8");
    });

    it("renders a descriptive paragraph", () => {
      expect(
        app
          .find("p")
          .at(0)
          .text()
      ).toEqual(
        "All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better."
      );
    });

    it("has a features div", () => {
      expect(app.find(".features").exists()).toBe(true);
    });
  });

  describe("chooseColour", () => {
    it("should change App's state to reflect the selected colour", () => {
      app.instance().chooseColour(desiredPhone.colourName);
      expect(app.state().colourName).toBe(desiredPhone.colourName);
    });
  });

  describe("chooseCapacity", () => {
    it("should change App's state to reflect the selected memory capacity", () => {
      app.instance().chooseCapacity(desiredPhone.memory);
      expect(app.state().memory).toBe(desiredPhone.memory);
    });
  });

  describe("selectPhone", () => {
    it("should select a phone based on the user's colour & memory choices", () => {
      app.setState({ colourName: desiredPhone.colourName, memory: desiredPhone.memory });
      app.instance().selectPhone();
      expect(app.state().selectedPhone).toEqual(desiredPhone);

      app.setState({ colourName: otherDesiredPhone.colourName, memory: otherDesiredPhone.memory });
      app.instance().selectPhone();
      expect(app.state().selectedPhone).not.toEqual(desiredPhone);
      expect(app.state().selectedPhone).toEqual(otherDesiredPhone);
    });

    it("should default to the first phone in the list if the selected combination isn't valid", () => {
      app.setState({ colourName: "this is not a colour", memory: "this is not a memory" });
      app.instance().selectPhone();
      expect(app.state().selectedPhone).toEqual(phones[0]);
    });
  });
});
