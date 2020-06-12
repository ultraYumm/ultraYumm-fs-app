import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./Font/Font.css";
import NavBar from "./NavHome/NavBar";
import HomePage from "./NavHome/HomePage";
import TripNav from "./TripList/TripNav";
import TripFilterForm from "./TripFilter/TripFilterForm";
import UltraContext from "./UltraContext";
import TripResults from "./Tables/TripResults";
import { DEFAULTITEM, PACKITEMS, TRIPS } from "./Defaults";

import ItemAdjust from "./ItemDetails/ItemAdjust";


import SearchResults from "./Tables/SearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: {},
      selectedTripId: "e",
      tripName: "Escalante",
      selectedItem: {DEFAULTITEM},
      item: {DEFAULTITEM},
      selectTripItem: [],
      items: [],
      trips: TRIPS
      
    };
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
  };

  updateSearchResults = (searchResults) => {
    this.setState({
      searchResults: searchResults,
    });
  };

  selectTrip = (selectedTripId, tripName) => {
    this.setState({
      selectedTripId: selectedTripId,
      tripName: tripName,
    });
  };

  selectItem = (selectedItem) => {
    this.setState({
      selectedItem: selectedItem,
    });
  };

  selectTripItem = (selectTripItem) => {
    this.setState({
      selectTripItem: selectTripItem,
    });
  };

  addItems = (packItems, items) => {
    this.setState({
      packItems: packItems,
      items: items
    });
  };

  addTrip = (tripId, iframe, tripName, tripTravelers, tripDates) => {
    const newTrips = [
      ...this.state.trips,
      {id: tripId,
       iframe: iframe,
       name: tripName,
       traveler_names: [tripTravelers],
       trip_dates: [tripDates]
      }
    ]
    
    this.setState({
      trips: newTrips,
    });
  }



  render() {

    

    
    const trips = this.state.trips;
    console.log(trips)
    const selectedTripId = this.state.selectedTripId;
    const selectedTrip = trips.filter((trip) => trip.id === selectedTripId);
    const packItems = this.props.packItems;
    const selectedTripItems = packItems.filter(
      (items) => items.tripId === selectedTripId
    );
    const selectedTripItemsId = selectedTripItems.map((item) => item.id);
    const items = this.props.items;
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
      if (selectedTripItemsId.includes(items[i].id)) {
        tripItems.push(items[i]);
      }
    }

    const itemTypes = this.props.itemTypes;

    const testA = {
      "shoppingItems": [
        /* put stub items in here for testing */
        { name: 'apples', checked: false },
        { name: 'oranges', checked: true },
        { name: 'bread', checked: false },
      ]
    };
    const newItems = [
      ...testA.shoppingItems,
      { name: "myfruit", checked: false }
    ]

    
    console.log(newItems)
  
    return (
      <div className="App">
        <NavBar />

        <Route
          exact
          path="/"
          render={(routerProps) => (
            <HomePage
              routerProps={routerProps}
              handleUpdate={(searchTerm) => this.updateSearchTerm(searchTerm)}
              handleResults={(searchResults) =>
                this.updateSearchResults(searchResults)
              }
              common={this.state.searchResults.common}
              branded={this.state.searchResults.branded}
              trips={trips}
              handleAddTrip={(tripId, iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(tripId, iframe, tripName, tripTravelers, tripDates)
              }
            />
          )}
        />

        <Route
          path="/my-trips"
          render={() => (
            <TripNav
              trips={trips}
              handleSelectTrip={(selectedTripId, tripName) =>
                this.selectTrip(selectedTripId, tripName)
              }
            />
          )}
        />

        <Route
          path="/trip-filter/:tripId"
          render={() => (
            <TripFilterForm
              selectedTrip={selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
            />
          )}
        />

        <Route
          path="/add-custom"
          render={() => (
            <ItemAdjust
              text = "Make your own item!"
              is = ""
              forT = ""
              onT = ""
              currentT = ""
              newT= ""
              s = ""
              selectedItem={this.state.selectedItem}
              item= {this.state.item}
              trips={trips}
              items={items}
              selectedTrip={selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
              itemTypes={itemTypes}
              tripName={""}
              packItems = {this.props.packItems}
              handleNewPackItems= {(packItems) =>
                this.addPackItems(packItems)
              }
            />
          )}
        />

        <Route
          path="/trip/:tripName"
          render={() => (
            <TripResults
              selectedTrip={selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
              itemTypes={itemTypes}
              handleSelectTripItem={(selectTripItem) =>
                this.selectTripItem(selectTripItem)
              }
              
            />
          )}
        />

        <Route
          path="/search-results"
          render={() => {
            console.log(this.state);
            return (
              <SearchResults
                results= {this.state.searchResults}
                common={this.state.searchResults.common}
                branded={this.state.searchResults.branded}
                trips={trips}
                handleSelectedItem={(selectedItem) =>
                  this.selectItem(selectedItem)
                }
                handleSelectTripItem={(selectTripItem) =>
                  this.selectTripItem(selectTripItem)}
              />
            );
          }}
        />

      


        <Route
          path="/item/:id"
          render={() => {
            return (
              <ItemAdjust
                text = "Customize your item!"
                is = ""
                forT = ""
                onT = ""
                currentT = ""
                newT= ""
                s = ""
                selectedItem={this.state.selectedItem}
                item= {this.state.item}
                trips={trips}
                items={items}
                selectedTrip={selectedTrip}
                tripItems={tripItems}
                itemTypes={itemTypes}
                tripName={this.state.tripName}
                packItems = {this.props.packItems}
                handleNewItems= {(packItems, items) =>
                  this.addPackItems(packItems, items)
                }
              />
            );
          }}
        />

          <Route
          path="/trip-item/:id"
          render={() => {
            return (
              <ItemAdjust
                text = "Customize your item"
                is = " is "
                forT = " for "
                onT = " on "
                currentT = "Current "
                newT= "New"
                s = "'s "
                //main difference below in props, this route passes selectedTripItem}
                selectedItem={this.state.selectTripItem}
                item= {this.state.item}
                trips={trips}
                items={items}
                selectedTrip={selectedTrip}
                selectedTripItems={selectedTripItems}
                tripItems={tripItems}
                itemTypes={itemTypes}
                tripName={this.state.tripName}
                packItems = {this.props.packItems}
                handleNewPackItems= {(packItems) =>
                  this.addPackItems(packItems)
                }
              />
              );
            }}
          />
            
        



      </div>
    );
  }
}
export default App;
