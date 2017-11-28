import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

// css
import './home.css';

class HomePage extends Component {
    state = {  }
    render() {
        return (
            <div className="bg">
               <Nav /> 
            </div>
        );
    }
}

export default HomePage;