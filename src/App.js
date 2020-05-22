import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import HomePage from './NavHome/HomePage';
import TripNav from './TripList/TripNav';
import TripFilterForm from './TripFilter/TripFilterForm';


class App extends Component {

  

  renderNavRoutes() {
    return (
        <>
        <Route path="/my-trips" component={TripNav} />
        </>
    );
}
  render() {

    const trips = this.props.trips
 
    const selectedTripId = "e" 
 
    const selectedTrip = trips.filter(trip => trip.id === selectedTripId);
 
    const packItems = this.props.packItems

    const selectedTripItems = packItems.filter(items => items.tripId === selectedTripId)

    console.log(selectedTripItems)

    const selectedTripItemsId = selectedTripItems.map((item)=> item.itemId)


    const items= this.props.items
    
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
    if (items[i].id == selectedTripItemsId[i]) {
        tripItems.push(items[i]);
    }
}
  console.log(tripItems); 
    

    return (

      <div className="App">
       
       <NavBar></NavBar>
       
       <HomePage></HomePage>
       
       <TripNav
        trips= {trips}
        ></TripNav>
        
       <TripFilterForm
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems = {tripItems}>
       </TripFilterForm>

      </div>
    
    );
  }
}
export default App;