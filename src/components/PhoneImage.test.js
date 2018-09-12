import React from 'react';
import { mount } from 'enzyme';
import PhoneImage from './PhoneImage';

describe('PhoneImage', () => {
  let image = mount(<PhoneImage />);

  it('has a phone image section', () => {
    expect(image.find('.phone-image-section').exists()).toBe(true);
  });
    
  it('renders the phone image', () => {
      expect(image.find('.phone-image').exists()).toBe(true);    
  });
})
