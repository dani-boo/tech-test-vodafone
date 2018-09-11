import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('renders the phone name', () => {
    expect(app.find('h1').text()).toEqual('Apple iPhone 8');
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
