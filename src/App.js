import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import HomePage from './NavHome/HomePage';
import TripNav from './TripList/TripNav';
import TripFilterForm from './TripFilter/TripFilterForm';
import AddCustomItemForm from './CustomItem/AddCustomItemForm';
import UltraContext from './UltraContext'

import TripResults from './Tables/TripResults';


import SearchResults from './Tables/SearchResults';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: {},
      selectedTripId: ''
    };
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    })
  }

 
  updateSearchResults = (searchResults) => {
    this.setState({
      searchResults: searchResults
    })
  }

  selectTrip = (selectedTripId) => {
    this.setState({
      selectedTripId: selectedTripId
    })
  }


  render() {

    const trips = this.props.trips
 
    const selectedTripId = this.state.selectedTripId
 
    const selectedTrip = trips.filter(trip => trip.id === selectedTripId);
 
    const packItems = this.props.packItems

    const selectedTripItems = packItems.filter(items => items.tripId === selectedTripId)
    
    const selectedTripItemsId = selectedTripItems.map((item)=> item.itemId)

    const items= this.props.items

    console.log(items)
    console.log(selectedTripItemsId)

    console.log(items[0].id)
    
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
      if (selectedTripItemsId.includes(items[i].id)) {
        tripItems.push(items[i]);
      }
      
    }
    console.log(tripItems)

    
    const itemTypes = this.props.itemTypes

    

    return (

      <div className="App">

      <NavBar></NavBar>
  

      <Route
        exact path='/'

        render = { (routerProps) =>

          <HomePage
        routerProps = {routerProps}
        handleUpdate={(searchTerm)=>this.updateSearchTerm(searchTerm)}
        handleResults={(searchResults)=>this.updateSearchResults(searchResults)}
        common= {this.state.searchResults.common}
        branded= {this.state.searchResults.branded}
        trips = {trips}   
       
        />}
        />
       
       <Route
        path = '/my-trips'
        render = {() =>
       <TripNav
          trips= {trips}
          handleSelectTrip={(selectedTripId)=>this.selectTrip(selectedTripId)}
        />
        }/>

      <Route
        path='/trip-filter/:tripId'
        render = { () =>
       <TripFilterForm
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}>
       </TripFilterForm>
       }
       />

        <Route
        path='/add-custom'
        render = { () =>
       <AddCustomItemForm
          trips= {trips}
          items= {items}
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}
          itemTypes= {itemTypes}
          >
      </AddCustomItemForm>
        }
        />

      <Route
        path='/trip/:tripId'
        render = { () =>

      <TripResults
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}
          itemTypes= {itemTypes}>
      </TripResults>}
      />


        <Route
        path='/search-results'
        
        render = { () => {
          console.log(this.state)
          return (
            <SearchResults
            common= {this.state.searchResults.common}
            branded= {this.state.searchResults.branded}
            trips = {trips}>
          </SearchResults>
          )}}/>
          

      </div>   
    
    );
  }
}
export default App;

