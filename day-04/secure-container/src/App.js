import React from 'react';
import logo from './logo.svg';
import './App.css';

import { validPassword } from './Passwords';

const countValidPasswords = (min, max) => {
  let count = 0;
  for(let password = min; password <= max; password++) {
    if( validPassword(password) ) {
      count++;
    }
  }
  return count;
}

const min = 254032;
const max = 789860;

function App() {
  const count = countValidPasswords(254032, 789860);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>There are { count } valid passwords between { min } and { max }</h3>
        {/* <h3>{validPassword(112211)}</h3> */}
      </header>
    </div>
  );
}

export default App;
