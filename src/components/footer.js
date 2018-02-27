import React, { Component } from 'react';

const mctLogo = require('../images/MCT-Logo.svg');

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            logo: mctLogo,
        }
    }
    render() {
        return (
            <footer>
                <div className="footer-box">
                    <p>Designed by </p>
                    <a href="http://www.mctdev.org" target="_blank"><img src={ this.state.logo } /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;