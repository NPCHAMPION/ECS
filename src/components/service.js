import React from 'react';

const Service = (props) => {
    
    var info, title, price;
    if (props.title) {
        title = <h1 className="title">{ props.title }</h1>
    }
    if (props.info) {
        info = <p className="info">{ props.info }</p>
    }
    if (props.price) {
        price = <p className="price">{ props.price }</p>
    }

    return (
        <div id="service-sqr">
            { title }
            { info }
            { price }
        </div>
    )
} 


export default Service;