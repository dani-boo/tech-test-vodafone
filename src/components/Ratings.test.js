import React from 'react';
import { shallow } from 'enzyme';
import Ratings from './Ratings';

const twoStars = shallow(<Ratings rating={1.8} />);
const fiveStars = shallow(<Ratings rating={4.2} />);
const noStars = shallow(<Ratings rating={0} />);

describe('Ratings', () => {
  it('renders gold stars according to a rounded-up rating', () => {    
    expect(twoStars.find('.star-gold')).toHaveLength(2);   
    expect(fiveStars.find('.star-gold')).toHaveLength(5);    
    expect(noStars.find('.star-gold')).toHaveLength(0);
  });
})
