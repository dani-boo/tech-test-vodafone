import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('has a phone content section', () => {
    expect(app.find('.phone-content-section').exists()).toBe(true);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('section 2: phone content', () => {

    it('renders the phone name', () => {
      expect(app.find('h1').text()).toEqual('Apple iPhone 8');
    });

    it('renders a descriptive paragraph', () => {
      expect(app.find('p').at(0).text()).toEqual('All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better.');
    });
    
    it('has a features div', () => {
        expect(app.find('.features').exists()).toBe(true);
    })
  })
})
