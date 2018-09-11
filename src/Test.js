import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

export default Welcome;
