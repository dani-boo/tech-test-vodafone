import React from 'react';
import { mount } from 'enzyme';
import Pricing from './Pricing';

describe('Pricing', () => {
  let pricing = mount(<Pricing />);
  let currentUpfrontCost = "£1149";
  let currentMonthlyCost = "£43.20 ";
      
  it('renders a table with pricing options', () => {
    expect(pricing.find('.pricing-options').exists()).toBe(true);
  });

  it('renders the upfront cost', () => {
    expect(pricing.find('.upfront-cost').text()).toEqual(currentUpfrontCost);
  })

  it('renders the monthly cost', () => {
    expect(pricing.find('.monthly-cost').text()).toEqual(currentMonthlyCost);
  })
})
