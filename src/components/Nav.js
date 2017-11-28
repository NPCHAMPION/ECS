import React, { Component } from 'react';

class Nav extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            logo: require('../images/ecs-logo.png'), 
            skinny: true,
            open: false,
        }

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen () {
        const currentState = this.state.open;
        this.setState({open: !currentState});
    }

    render() {
        return (
            <div id="nav-bar">
                    <a id='menu-button' onClick={ this.toggleOpen } className={ this.state.open ? "open" : null }>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                <a className="logo" href="#"><img src={this.state.logo} alt="ECS" /></a>
                <ul className={ this.state.skinny ? "nav justify-content-end hide" : "nav jusfity-content-end" }>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                {/* <i className="fa fa-bars"></i> */}
                <div id="nav-bot-border"></div>
            </div>
        );
    }
}

export default Nav;
