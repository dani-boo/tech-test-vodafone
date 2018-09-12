import React from "react";
import { shallow } from "enzyme";
import PhoneImage from "./PhoneImage";

describe("PhoneImage", () => {
  const image = shallow(<PhoneImage src={""} alt={""} />);

  it("has a phone image section", () => {
    expect(image.find(".phone-image-section").exists()).toBe(true);
  });

  it("renders the phone image", () => {
    expect(image.find("img.phone-image").exists()).toBe(true);
  });

  it("provides the phone image with the supplied src and alt", () => {
    const imageWithProps = shallow(<PhoneImage src={"foo"} alt={"bar"} />);
    expect(imageWithProps.find('img.phone-image[src="foo"][alt="bar"]').exists()).toBe(true);
  });
});
