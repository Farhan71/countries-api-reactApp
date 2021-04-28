import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Population from './components/Population/Population';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
      fetch('https://restcountries.eu/rest/v2/all')
      .then ( res => res.json())
      .then (data=> setCountries(data))
      .catch (err => console.log(err))
  },[])

  const handleAddCountry = (country)=> {
    const newCart = [...cart, country]
    setCart(newCart);
  }

  //  const names = countries.map()

  return (
    <div className="App">
      <h1>Countries Loaded: {countries.length}</h1>
      <h3>Country Added: {cart.length}</h3>
     <Population cart={cart}></Population>
      
        {
          countries.map (country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
