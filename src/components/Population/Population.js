import React from 'react';

const Population = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population
    }
    return (
        <div>
            <h4>Total Population: {totalPopulation}</h4>
        </div>
    );
};

export default Population;