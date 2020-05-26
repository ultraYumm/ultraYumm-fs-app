import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import HomePage from './NavHome/HomePage';
import TripNav from './TripList/TripNav';
import TripFilterForm from './TripFilter/TripFilterForm';
import AddCustomItemForm from './CustomItem/AddCustomItemForm';

import TripResults from './Tables/TripResults';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: {}
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

  renderNavRoutes = () => {
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
    
    const selectedTripItemsId = selectedTripItems.map((item)=> item.itemId)

    const items= this.props.items
    
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
    if (items[i].id == selectedTripItemsId[i]) {
        tripItems.push(items[i]);
      }
    }

    
    const itemTypes = this.props.itemTypes

    

    return (

      <div className="App">
       
       <NavBar></NavBar>
       
       <HomePage
       searchTerm={this.state.searchTerm}

       searchResults= {this.state.searchResults}

       handleUpdate={(searchTerm)=>this.updateSearchTerm(searchTerm)}

       handleResults={(searchResults)=>this.updateSearchResults(searchResults)}
       
       
       >
       
       
       </HomePage>
       
       <TripNav
          trips= {trips}
        ></TripNav>
      
       <TripFilterForm
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}>
       </TripFilterForm>


       <AddCustomItemForm
          trips= {trips}
          items= {items}
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}
          itemTypes= {itemTypes}
          >
       
      </AddCustomItemForm>

      <TripResults
          selectedTrip= {selectedTrip}
          selectedTripItems= {selectedTripItems}
          tripItems= {tripItems}
          itemTypes= {itemTypes}>
          
      ></TripResults>

      </div>
      
     
    
    );
  }
}
export default App;