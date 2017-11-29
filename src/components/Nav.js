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
                <a className="logo" href="#"><img id="logo" src={this.state.logo} alt="ECS" /></a>
                <ul id="mobile-nav" className={ this.state.open ? "open" : null}>
                    {this.props.children}
                </ul>
                <ul className="nav justify-content-end" id="big-nav">
                    { this.props.children }
                </ul>
                {/* <i className="fa fa-bars"></i> */}
                <div id="nav-bot-border"></div>
            </div>
        );
    }
}

export default Nav;
