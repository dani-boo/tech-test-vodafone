import React from "react";
import { shallow } from "enzyme";
import Pricing from "./Pricing";
import { phones } from "../data";

describe("Pricing", () => {
  const pricing = shallow(<Pricing priceInfo={phones[0].priceInfo} />);
  const currentUpfrontCost = "£149";
  const currentMonthlyCost = "£43.20";

  it("renders the upfront cost", () => {
    expect(pricing.find(".upfront-cost span").text()).toEqual(currentUpfrontCost);
  });

  it("renders the monthly cost", () => {
    expect(pricing.find(".monthly-cost span").text()).toEqual(currentMonthlyCost);
  });
});
