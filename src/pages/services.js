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

    componentDidMount = () => (
        this.setState({ services: serviceData })
    )

    render() {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="services-box">
                    <h1>Services</h1>
                    { 
                        this.state.services.map( (item, index) => (
                            <Service title={item.title} info={item.info} price={item.price} />
                            )
                        ) 
                    }
                </div>
            </div>


        )
    }
}

export default ServicesPage;