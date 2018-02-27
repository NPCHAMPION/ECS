import React, { Component } from 'react';
import Service from '../components/service'

// get services
const serviceData = require('./servicesData');


class ServicesPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            services: [],
        }
    }

    componentDidMount() {
        this.setState({ services: serviceData })
    }

    render() {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="services-shell">
                    <div className="header-box">
                        <h1>Services</h1>
                    </div>
                    <div className="services-box">
                        { 
                            this.state.services.map( (item, index) => (
                                <Service key={index} title={item.title} info={item.info} price={item.price} />
                                )
                            ) 
                        }
                    </div>
                </div>
            </div>


        )
    }
}

export default ServicesPage;