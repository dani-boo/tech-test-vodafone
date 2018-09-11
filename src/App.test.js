import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);
  let chosenColour = 'Space Grey';

  it('has a phone image section', () => {
    expect(app.find('.phone-image-section').exists()).toBe(true);
  });

  it('renders the phone image', () => {
    expect(app.find('.phone-image').exists()).toBe(true);
  });

  it('has a phone content section', () => {
    expect(app.find('.phone-content-section').exists()).toBe(true);
  });

  it('renders the phone name', () => {
    expect(app.find('h1').text()).toEqual('Apple iPhone 8');
  });

  it('renders a five-star rating', () => {
    expect(app.find('.star-gold').at(0).exists()).toBe(true);
    expect(app.find('.star-gold').at(1).exists()).toBe(true);
    expect(app.find('.star-gold').at(2).exists()).toBe(true);
    expect(app.find('.star-gold').at(3).exists()).toBe(true);
    expect(app.find('.star-gold').at(4).exists()).toBe(true);
  });

  it('doesn\'t have more than 5 stars', () => {
    expect(app.find('.star-gold').at(5).exists()).toBe(false);
  });

  it('renders a descriptive paragraph', () => {
    expect(app.find('p').at(0).text()).toEqual('All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better.');
  });

  it('has a colour options div', () => {
    expect(app.find('.colour-options').exists()).toBe(true);
  })

  it('renders a colour label', () => {
    expect(app.find('label').text()).toEqual(`Colour: ${chosenColour}`);
  })

  it('renders 3 colour options as buttons', () => {
    expect(app.find('.button-gold').exists()).toBe(true);
    expect(app.find('.button-silver').exists()).toBe(true);
    expect(app.find('.button-space-grey').exists()).toBe(true);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
