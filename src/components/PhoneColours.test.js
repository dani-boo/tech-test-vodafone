import React from 'react';
import { mount } from 'enzyme';
import PhoneColours from './PhoneColours';

describe('colour options', () => {
  let colours = mount(<PhoneColours />);
  let chosenColour = "Space Grey";

  it('has a colour options div', () => {
    expect(colours.find('.colour-options').exists()).toBe(true);
  })

  it('renders a colour label', () => {
    expect(colours.find('label').text()).toEqual(`Colour: ${chosenColour}`);
  })

  it('renders 3 colour options as buttons', () => {
    expect(colours.find('.button-gold').exists()).toBe(true);
    expect(colours.find('.button-silver').exists()).toBe(true);
    expect(colours.find('.button-space-grey').exists()).toBe(true);
  })
})
