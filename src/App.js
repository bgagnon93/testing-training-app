import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header'
import MainContent from './components/main-content/MainContent'

class App extends React.Component {
  render() {
    return (

      <div className="App" >
        <Header />
        <MainContent />
        {/* <AboutYou />
        <VehicleList vehicles={this.state.vehicles} addVehicle={this.addVehicle}/>
        <DriverList drivers={this.state.drivers} addDriver={this.addDriver}/>
        <Satisfied /> */}
        
        {/* <header className="App-header">
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
        </header> */}
      
      </div>
    );
  }
}

export default App;
