import React, { Component } from 'react';
import Main from './layout/main';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main>
            <Nav />
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
