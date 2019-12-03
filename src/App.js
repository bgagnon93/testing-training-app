import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header'
import AboutYou from './components/main-content/AboutYou'
import VehicleList from './components/main-content/VehicleList';
import DriverList from './components/main-content/DriverList';
import Satisfied from './components/main-content/Satisfied';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutYou />
      <VehicleList />
      <DriverList />
      <Satisfied />
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
