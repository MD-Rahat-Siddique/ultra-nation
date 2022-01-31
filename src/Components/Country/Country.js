import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, population, flags, region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countries">
            <div className="country-container">
                <h2>Name : {name.common}</h2>
                <p><b>Capital : </b>{capital}</p>
                <p><b>Population : </b>{population}</p>
                <p><small><b>Region : </b>{region}</small></p>
                <img src={flags.png} alt="Flag"></img>
                <br></br>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;