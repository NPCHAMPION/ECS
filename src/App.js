import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import HomePage from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Team</a>
            </li>
            <li>
                <a href="#">Products</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </Nav>
        <HomePage />
      </div>
    );
  }
}

export default App;
