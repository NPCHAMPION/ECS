import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            logo: require('../images/ecs-logo.png'), 
            skinny: true,
            open: false,
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.pauseAndOpen = this.pauseAndOpen.bind(this);
    }

    toggleOpen (pause = false) {
        const currentState = this.state.open;
        this.setState({open: !currentState});
    }

    pauseAndOpen () {
        setTimeout(() => {
            this.toggleOpen();            
        }, 400);
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
                <a className="logo" href="#"><img id="logo" src={this.state.logo} alt="ECS" /></a>
                <ul id="mobile-nav" className={ this.state.open ? "open" : null}>
                    <Link to={'/ecs'} onClick={ this.pauseAndOpen }>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to={'/ecs/services'} onClick={ this.pauseAndOpen }>
                        <li>
                            Services
                        </li>
                    </Link>
                    <Link to={'/ecs/team'} onClick={ this.pauseAndOpen }>
                        <li>
                            Team 
                        </li>
                    </Link>
                    <Link to={'/ecs/products'} onClick={ this.pauseAndOpen }>
                        <li>
                            Products 
                        </li>
                    </Link>
                    <Link to={'/ecs/contact'} onClick={ this.pauseAndOpen }>
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>
                <ul className="nav justify-content-end" id="big-nav">
                    <Link to={'/ecs'} onClick={ this.pauseAndOpen }>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to={'/ecs/services'} onClick={ this.pauseAndOpen }>
                        <li>
                            Services
                        </li>
                    </Link>
                    <Link to={'/ecs/team'} onClick={ this.pauseAndOpen }>
                        <li>
                            Team 
                        </li>
                    </Link>
                    <Link to={'/ecs/products'} onClick={ this.pauseAndOpen }>
                        <li>
                            Products 
                        </li>
                    </Link>
                    <Link to={'/ecs/contact'} onClick={ this.pauseAndOpen }>
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>
                {/* <i className="fa fa-bars"></i> */}
                <div id="nav-bot-border"></div>
            </div>
        );
    }
}

export default Nav;
