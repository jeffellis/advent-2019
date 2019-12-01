import React from 'react';
import logo from './logo.svg';
import './App.css';
import { inputMasses } from './input';

const fuelRequired = (mass) => {
  const fuel = Math.floor( mass / 3 ) - 2; 
  if( fuel > 0 ) {
    return fuel + fuelRequired(fuel);
  }
  return 0;
}

const Total = (props) => {
  const total = props.fuelRequirements.reduce( (acc, value) => acc + value );
  return ( 
    <h1>Total Fuel Required = { total } units </h1>
  );
}

function App() {
  const fuelRequirements = inputMasses.map( (mass) => fuelRequired(mass) );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Total fuelRequirements={ fuelRequirements }/>
      </header>
    </div>
  );
}

export default App;
