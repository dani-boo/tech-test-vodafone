import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import image from './assets/images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <section className="phone-image-section">
      <img src={image} className="phone-image" alt="iPhone 8 Space Grey" /></section>
      <section className="phone-content-section">
      <h1>Apple iPhone 8</h1>  
      </section>
      <section className="phone-content-section">
        <span className="star">☆</span>
        <span className="star">☆</span>
        <span className="star">☆</span>
        <span className="star">☆</span>
        <span className="star">☆</span>
        <p>All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better.</p>
      </section>
    </div>
    );
  }
}

export default App;
