import React, { Component } from 'react';
import Nav from '../components/Nav';

class HomePage extends Component {
    state = {
        image: require('../images/ecs-logo2.png'),
    }
    render() {
        return (
            <div className="bg">
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
               <div className="container-fluid">
                    <div className="row">
                        <div className="col image-col">
                            <img id="ecs-image" src={this.state.image} alt="ECS" />
                        </div>
                        <div className="col text-col">
                            <h1>A place of comfort & style where fashion meets first class.</h1>
                            <br />
                            <p>Our professional barbers and stylists are standing by, and the <span className="red-text">drinks are on us</span>! We have a friendly staff, convenient location, and free valet parking so come on in and treat yourself to the <span className="red-text">Executive Experience</span> today!</p>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default HomePage;