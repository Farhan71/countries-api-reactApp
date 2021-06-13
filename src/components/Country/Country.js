import React from 'react';

const Country = (props) => {
    // console.log (props.country.name)
    console.log(props)
    const  {name, population, flag} = props.country
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height: "50px",
        border: "2px solid black"
    }
    const countryStyle = {
        border: "2px solid grey",
        borderRadius: "15px",
        boxShadow: "10px 10px 2px #ccc",
        margin: "20px",
        padding: "5px",
        height: "200px"
    }
    return (
        <div style={countryStyle}>
            {/* This is {props.name}  */}
            <img style={flagStyle} src={flag} alt=""/>
            <h2>{name}</h2>
            <h4>{population}</h4> 
            <button onClick={()=> handleAddCountry(props.country)}>Add This</button>
        </div>
    );
};

export default Country;