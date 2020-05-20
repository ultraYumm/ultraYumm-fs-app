import React, { Component } from 'react';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import HomePage from './NavHome/HomePage';
import TripNav from './TripList/TripNav';


class App extends Component {
  render() {
    return (
      <div className="App">
            <NavBar></NavBar>
            <HomePage></HomePage>
            <TripNav></TripNav>
      </div>
    );
  }
}
export default App;