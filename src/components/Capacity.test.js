import React from 'react';
import { mount } from 'enzyme';
import Capacity from './Capacity';

describe('capacity options', () => {
  let capacity = mount(<Capacity />);
  let chosenCapacity = '64';

  it('has a capacity options div', () => {
    expect(capacity.find('.capacity-options').exists()).toBe(true);
  })

  it('renders a capacity label', () => {
    expect(capacity.find('label').text()).toEqual(`Capacity: ${chosenCapacity}`);
  })

  it('renders 2 capacity options as buttons', () => {
    expect(capacity.find('.button-gigs').at(0).exists()).toBe(true);
    expect(capacity.find('.button-gigs').at(1).exists()).toBe(true);
  })
})
