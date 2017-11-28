import React, { Component } from 'react';
import Nav from '../components/Nav';

class HomePage extends Component {
    state = {
        image: require('../images/ecs-logo2.png'),
    }
    render() {
        return (
            <div className="bg">
               <Nav /> 
               <div className="container-fluid">
                    <div className="row">
                        <div className="col image-col">
                            <img id="ecs-image" src={this.state.image} alt="ECS" />
                        </div>
                        <div className="col text-col">
                            <h1>Welcome to the site!</h1>
                            <p>lorem ipsum and stuff. here you go.</p>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default HomePage;