import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce((sum, country) => sum + country.population , 0)
    return (
        <div>
            <h4>Country Added : {props.cart.length}</h4>
            <h4>Total Population : {totalPopulation}</h4>
        </div>
    );
};

export default Cart;