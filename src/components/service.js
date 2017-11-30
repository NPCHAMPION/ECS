import React from 'react';

const Service = (props) => {
    
    var info, title, price;
    if (props.title) {
        title = <h1>{ props.title }</h1>
    }
    if (props.info) {
        info = <p>{ props.info }</p>
    }
    if (props.price) {
        price = <p>{ props.price }</p>
    }

    return (
        <div>
            { title }
            { info }
            { price }
        </div>
    )
} 


export default Service;