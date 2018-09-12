import React from 'react';
import { mount } from 'enzyme';
import Ratings from './Ratings';

describe('Ratings', () => {
  let ratings = mount(<Ratings />);

  it('renders a five-star rating', () => {
    expect(ratings.find('.star-gold').at(0).exists()).toBe(true);
    expect(ratings.find('.star-gold').at(1).exists()).toBe(true);
    expect(ratings.find('.star-gold').at(2).exists()).toBe(true);
    expect(ratings.find('.star-gold').at(3).exists()).toBe(true);
    expect(ratings.find('.star-gold').at(4).exists()).toBe(true);
  });

  it('doesn\'t have more than 5 stars', () => {
    expect(ratings.find('.star-gold').at(5).exists()).toBe(false);
  });
})
