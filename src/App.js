import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "./Font/Font.css";
import NavBar from "./NavHome/NavBar";
import HomePage from "./NavHome/HomePage";
import Footer from "./NavHome/Footer";
import TripNav from "./TripList/TripNav";
import TripFilterForm from "./TripFilter/TripFilterForm";
import SearchForm from "./Search/SearchForm";
import AddTripForm from "./AddTrip/AddTripForm";
import TripResults from "./Tables/TripResults";
import { PACKITEMS, ITEMS, TRIPS, ITEMTYPES } from "./Defaults";
import config from "./config";
import "./FormElements/FormElements.css";
import ItemAdjust from "./ItemDetails/ItemAdjust";
import SearchResults from "./Tables/SearchResults";
Amplify.configure(awsconfig);

class App extends Component {
  
  static defaultProps = {
    items: ITEMS,
    trips: TRIPS,
    packItems: PACKITEMS
  };
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: {},
      selectedTripId: TRIPS[0].id,
      tripName: TRIPS[0].name,
      selectedItem: ITEMS[0],
      item: ITEMS[0],
      items: ITEMS,
      trips: TRIPS,
      packItems: PACKITEMS,
    };
  }

  

  handleGetTrips(e) {
    e.preventDefault();
    const API = config.API_UY_ENDPOINT   
    const  endpoint = config.endpointT
   
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
     
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          trips: data,
          error: null
        });
      
      }
      )
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get trips at this time.'
        });
      })

  }


  handleGetItems(e) {
    e.preventDefault();
    const API = config.API_UY_ENDPOINT   
    const  endpoint = config.endpointI
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
          this.setState({
          items: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get trips at this time.'
        });
      })

  }

  componentDidMount() {
    const API = config.API_UY_ENDPOINT   
    const  endpointI = config.endpointI
    const  endpointT = config.endpointT
    const  endpointP = config.endpointP
   
    const API_TOKEN = config.API_UY_KEY

    const urls = [
      API + endpointI,
      API + endpointT,
      API + endpointP,
    ]

  
    const fetches = urls
    .map (url =>
       fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
       })
       .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json(); 
        
      })
      
      )

      Promise.all(fetches)
      .then(data => {
          this.setState({
          items: data[0],
          trips: data[1],
          packItems: data[2]
        });
      })
      
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get trips at this time.'
        });
      })
    }


  handleGetPackItems(e) {
    e.preventDefault();
    const API = config.API_UY_ENDPOINT   
    const  endpoint = config.endpointP
   
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          packItems: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get trips at this time.'
        });
      })

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



  addItem = (newId, newBrand, newCalsPs, newName, newImage, newWeight, newQty, newUnit) => {
    const items = this.state.items
    const newItems = [
      ...items,
      { id: newId, 
        food_name: newName,
        image: newImage,
        cals_per_serving: newCalsPs,
        serving_qty: newQty,
        serving_unit: newUnit,
        serving_weight_grams: newWeight,
        brand_name: newBrand
      }
    ]
    this.setState({
      items: newItems,
    });
  }

 

  addTrip = (iframe, tripName, tripTravelers, tripDates, userid) => {
    const newTrips = [
      ...this.state.trips,
      {name: tripName,
       iframe: iframe,
       traveler_names: tripTravelers,
       trip_dates: tripDates[0],
       userid: userid
      }
    ]
    this.setState({
      trips: newTrips,
    });
  }

  addPackItem = (id, tripid, trip_day, trav_name, type, serving_qty) => {
    const newPackItems = [
      ...this.state.packItems,
      {id: id,
       tripid: tripid,
       trip_day: trip_day,
       trav_name: trav_name,
       type: type,
       serving_qty: serving_qty
      }
    ]
    this.setState({
      packItems: newPackItems,
    })
  }
  
  deletePackItem = idToDelete => {
    const newPackItems = this.state.packItems.filter(pack =>
        pack.id !== idToDelete
        )
        this.setState({
         packItems: newPackItems
        })

    }
    

  render() {

   
    const trips = this.state.trips
    const items = this.state.items    
    const selectedTripId = this.state.selectedTripId
    const selectedTrip = trips.filter((trip) => trip.id === selectedTripId)
    const packItems = this.state.packItems 
    const selectedTripItems = packItems.filter(
      (items) => items.tripid === selectedTripId
    );
    const selectedTripItemsId = selectedTripItems.map((item) => item.id)
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
      if (selectedTripItemsId.includes(items[i].id)) {
        tripItems.push(items[i]);
      }
    }
  
    return (
      
<div className="App">
        
        <NavBar 
        getTrips = {e => this.handleGetTrips(e)}
        />

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
               handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(iframe, tripName, tripTravelers, tripDates)
              }

              trips = {trips}

              getItems = {(e) =>
                this.handleGetItems(e)}
 
              getPackItems = {(e) =>
              this.handleGetPackItems(e)}

              getTrips = {(e) =>
                this.handleGetTrips(e)}

 
         
            />
          )}
        />

        <Route
          exact
          path= "/search-bar"
          render={(routerProps) => (
            <SearchForm
              routerProps={routerProps}
              handleUpdate={(searchTerm) => this.updateSearchTerm(searchTerm)}
              handleResults={(searchResults) =>
                this.updateSearchResults(searchResults)
              }
        
             
            />
          )}
        />

        <Route
          exact
          path= "/add-trip"
          render={(routerProps) => (
            <AddTripForm
              routerProps={routerProps}
              handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(iframe, tripName, tripTravelers, tripDates)
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
              getTrips = {e => this.handleGetTrips(e)}
            />
          )}
        />

        <Route
          path="/trip-filter/:tripid"
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
          render={(routerProps) => (
            <ItemAdjust
              routerProps={routerProps}
              text = "Make your own item!"
              is = ""
              forT = ""
              onT = ""
              currentT = ""
              newT= ""
              s = ""
              selectedItem= {!this.state.selectedItem? ITEMS[0] : this.state.selectedItem}
              item= {ITEMS[0]}
              trips={!trips? TRIPS : trips}
              items= {!items? ITEMS : items}
              selectedTrip={selectedTrip === TRIPS[0]? TRIPS[0] : selectedTrip}
              tripItems={selectedTrip === TRIPS[0]? ITEMS : tripItems}
              itemTypes={ITEMTYPES}
              tripName={selectedTrip === TRIPS[0]? TRIPS[0].name : this.state.tripName}
              packItems = {selectedTrip === TRIPS[0]?PACKITEMS: this.state.packItems}

              handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
              }

              handleNewPackItem={(id, tripid, trip_day, trav_name, type, serving_qty) =>
                this.addPackItem(id, tripid, trip_day, trav_name, type, serving_qty)
              }

             getItems = {(e) =>
                this.handleGetItems(e)}

             getPackItems = {(e) =>
              this.handleGetPackItems(e)
            }

            getTrips = {(e) =>
              this.handleGetTrips(e)
            }
            />
          )}
        />

        <Route
          path="/trip/:tripName"
          render={(routerProps) => (
            <TripResults
              trips = {trips}
              routerProps={routerProps}
              selectedTrip={selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
              itemTypes={ITEMTYPES}
              handleSelectTripItem={(selectTripItem) =>
                this.selectTripItem(selectTripItem)
                            }

              handleDeletePackItem = {(idToDelete) => this.deletePackItem(idToDelete)}
              getPackItems = {(e) =>
                this.handleGetPackItems(e)
              }

              getItems = {(e) =>
                this.handleGetItems(e)
              }
              
            />
          )}
        />

        <Route
          path="/search-results"
          render={(routerProps) => {
            return (
              <SearchResults
                routerProps={routerProps}
                results= {this.state.searchResults}
                common={this.state.searchResults.common}
                branded={this.state.searchResults.branded}
                trips={trips}
                handleSelectedItem={(selectedItem) =>
                  this.selectItem(selectedItem)
                }
                handleSelectTripItem={(selectTripItem) =>
                  this.selectTripItem(selectTripItem)}

                  getTrips = {(e) =>
                    this.handleGetTrips(e)}
              />
            )
          }}
        />

      


        <Route
          path="/item/:id"
          render={(routerProps) => {
            return (
              <ItemAdjust
                routerProps={routerProps}
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
                selectedTrip={!selectedTrip? trips[0] : selectedTrip}
                tripItems={tripItems}
                itemTypes={ITEMTYPES}
                tripName={this.state.tripName}
                packItems = {this.state.packItems}
                
                handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
              }

                handleNewPackItem={(id, tripid, trip_day, trav_name, type, serving_qty) =>
                  this.addPackItem(id, tripid, trip_day, trav_name, type, serving_qty)
              }
                getItems = {(e) =>
                this.handleGetItems(e)}
  
                getPackItems = {(e) =>
                this.handleGetPackItems(e)}

                getTrips = {(e) =>
                  this.handleGetTrips(e)}
              />
            )
          }}
        />

          <Route
          path="/trip-item/:id"
          render={(routerProps) => {
            return (
              <ItemAdjust
                routerProps={routerProps}
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
                itemTypes={ITEMTYPES}
                tripName={this.state.tripName}
                packItems = {this.state.packItems}
                
                handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                  this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
                } 

                handleNewPackItem={(id, tripid, trip_day, trav_name, type, serving_qty) =>
                this.addPackItem(id, tripid, trip_day, trav_name, type, serving_qty)
                }

                getItems = {(e) =>
                  this.handleGetItems(e)}

                getPackItems = {(e) =>
                  this.handleGetPackItems(e)}

                getTrips = {(e) =>
                    this.handleGetTrips(e)}

              />
              )
            }}
          />
     
     <Footer/>
      </div>
    )
  }
}

export default App;

/*
<div className={"loader " + (this.state.fetchSuccess? "hide":"")}>
<img src="https://i.redd.it/o6m7b0l6h6pz.gif"/>
</div>
/*<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=641858383084084&autoLogAppEvents=1" nonce="HV34mOzB"></script>*/
