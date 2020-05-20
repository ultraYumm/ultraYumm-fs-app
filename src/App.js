import React, { Component } from 'react';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import HomePage from './NavHome/HomePage';
import TripNav from './TripList/TripNav';
import TripFilterForm from './TripFilter/TripFilterForm';


class App extends Component {
  render() {

    const trips = this.props.trips

    return (

            <div className="App">
            <NavBar></NavBar>
            <HomePage></HomePage>
           
           <TripNav
            trips= {trips}
            
           ></TripNav>
            
           
            <TripFilterForm></TripFilterForm>
      </div>
    );
  }
}
export default App;