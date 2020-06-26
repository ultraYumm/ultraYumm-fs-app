import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./Font/Font.css";
import NavBar from "./NavHome/NavBar";
import HomePage from "./NavHome/HomePage";
import Footer from "./NavHome/Footer";
import TripNav from "./TripList/TripNav";
import TripFilterForm from "./TripFilter/TripFilterForm";
import SearchForm from "./Search/SearchForm";
import TripResults from "./Tables/TripResults";
import { DEFAULTITEM, PACKITEMS, ITEMS, TRIPS } from "./Defaults";
import config from "./config";
import "./FormElements/FormElements.css";


import ItemAdjust from "./ItemDetails/ItemAdjust";


import SearchResults from "./Tables/SearchResults";

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
      selectedTripId: "e",
      tripName: "Escalante",
      selectedItem: DEFAULTITEM,
      item: DEFAULTITEM,
      selectTripItem: [],
      items: [],
      trips: [],
      packItems: [],
    };
  }

  handleGetTrips(e) {
    e.preventDefault();
    const API = config. API_UY_ENDPOINT   
    const  endpoint = config.endpointT
   
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      // add other options e.g. method, body, etc...
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
          this.setState({
          trips: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get trips at this time.'
        });
      })

  }


  handleGetItems(e) {
    e.preventDefault();
    const API = config. API_UY_ENDPOINT   
    const  endpoint = config.endpointI
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      // add other options e.g. method, body, etc...
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
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
   const API = config. API_UY_ENDPOINT   
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
    const API = config. API_UY_ENDPOINT   
    const  endpoint = config.endpointP
   
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

   
    fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      // add other options e.g. method, body, etc...
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
        calsPerServing: newCalsPs,
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

 

  addTrip = (tripId, iframe, tripName, tripTravelers, tripDates) => {
    const newTrips = [
      ...this.state.trips,
      {id: tripId,
       iframe: iframe,
       name: tripName,
       traveler_names: tripTravelers,
       trip_dates: tripDates[0]
      }
    ]
    this.setState({
      trips: newTrips,
    });
  }

  addPackItem = (id, tripId, tripDay, travName, type, serving_qty) => {
    const newPackItems = [
      ...this.state.packItems,
      {id: id,
       tripId: tripId,
       tripDay: tripDay,
       travName: travName,
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
    console.log(packItems)
    

    const selectedTripItems = packItems.filter(
      (items) => items.tripId === selectedTripId
    );


    const selectedTripItemsId = selectedTripItems.map((item) => item.id)
  
    var tripItems = [];
    for (let i = 0; i < items.length; i++) {
      if (selectedTripItemsId.includes(items[i].id)) {
        tripItems.push(items[i]);
      }
    }

    const itemTypes = this.props.itemTypes

  
  
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
          path= "/search-bar"
          component= {SearchForm}/>

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

              handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
              }

              handleNewPackItem={(id, tripId, tripDay, travName, type, serving_qty) =>
                this.addPackItem(id, tripId, tripDay, travName, type, serving_qty)
              }

             getItems = {(e) =>
                this.handleGetItems(e)}

             getPackItems = {(e) =>
              this.handleGetPackItems(e)
            }
            />
          )}
        />

        <Route
          path="/trip/:tripName"
          render={(routerProps) => (
            <TripResults
              routerProps={routerProps}
              selectedTrip={selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
              itemTypes={itemTypes}
              handleSelectTripItem={(selectTripItem) =>
                this.selectTripItem(selectTripItem)
                            }

              handleDeletePackItem = {(idToDelete) => this.deletePackItem(idToDelete)}
              getPackItems = {(e) =>
                this.handleGetPackItems(e)
              }

         
              
            />
          )}
        />

        <Route
          path="/search-results"
          render={(routerProps) => {
            console.log(this.state);
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
                selectedTrip={selectedTrip}
                tripItems={tripItems}
                itemTypes={itemTypes}
                tripName={this.state.tripName}
                packItems = {this.props.packItems}
                
                handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
              }

                handleNewPackItem={(id, tripId, tripDay, travName, type, serving_qty) =>
                  this.addPackItem(id, tripId, tripDay, travName, type, serving_qty)
              }
                getItems = {(e) =>
                this.handleGetItems(e)}
  
                getPackItems = {(e) =>
                this.handleGetPackItems(e)}

              
          
            

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
                itemTypes={itemTypes}
                tripName={this.state.tripName}
                packItems = {this.props.packItems}
                
                handleNewItem= {(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit) =>
                  this.addItem(newBrand, newCalsPs, newName, newId, newImage, newWeight, newQty, newUnit)
                } 


                handleNewPackItem={(id, tripId, tripDay, travName, type, serving_qty) =>
                this.addPackItem(id, tripId, tripDay, travName, type, serving_qty)
                }

                getItems = {(e) =>
                  this.handleGetItems(e)}

                getPackItems = {(e) =>
                  this.handleGetPackItems(e)}

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
</div>*/