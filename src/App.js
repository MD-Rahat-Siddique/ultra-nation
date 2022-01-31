import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country key={country.cca3} handleAddCountry={handleAddCountry} country={country}></Country>)
      }
    </div>
  );
}

export default App;
