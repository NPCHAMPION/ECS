import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; // have to use .css files instead of .scss
import HomePage from './containers/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
