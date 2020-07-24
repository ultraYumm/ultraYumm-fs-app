import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "./Font/Font.css";
import NavBar from "./NavHome/NavBar";
import SignInBox from "./NavHome/SignInBox";
import AuthStateApp from "./NavHome/AuthStateApp";
import HomePage from "./NavHome/HomePage";
import Footer from "./NavHome/Footer";
import TripNav from "./TripList/TripNav";
import TripFilterForm from "./TripFilter/TripFilterForm";
import SearchForm from "./Search/SearchForm";
import AddTripForm from "./AddTrip/AddTripForm";
import EditTripForm from "./AddTrip/EditTripForm";
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
    packItems: PACKITEMS,
    selectedTrip: TRIPS[0]
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
      users: [],
      userid: 1,
      username: "",
     
    };
  }

  

  handleGetTrips(e) {
    e.preventDefault();
    const API = config.API_UY_ENDPOINT   
    const  endpoint = config.endpointT
   
    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

    const userid = this.state.userid

   
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
          trips: data.filter(trip => (trip.userid === userid)),
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
    const  endpointU = config.endpointU
   
    const API_TOKEN = config.API_UY_KEY

    const userid = this.state.userid

    const urls = [
      API + endpointI,
      API + endpointU,
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
        console.log(data)
          this.setState({
          items: data[0],
          users: data[1],
          trips: data[2].filter(trip => (trip.userid === userid)),
          packItems: data[3]
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

  deleteTrip = idToDelete => {
      const newTrips = this.state.trips.filter(trip =>
          trip.id !== idToDelete
          )
          this.setState({
           trips: newTrips
          })
  
      }

  getUser = (userid, username) => {
    const trips = this.state.trips
    
        this.setState({
          userid: userid,
          username: username,
          trips: trips.filter(trip =>
            trip.userid === userid
            ),
        })
      

        const inputValues = {
      id: this.state.userid,
      username: this.state.username
    }


    const API = config.API_UY_ENDPOINT   
    const endpoint = config.endpointU

    const url = API + endpoint;
    const API_TOKEN = config.API_UY_KEY

    


    fetch(url, {
          
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${API_TOKEN}`
      }
    }
    )

  .then(res => {
  if (!res.ok) {
      // get the error message from the response
      return res.json().then(error => {
      // then throw it
      throw error
      })
  }

 
  return res.json()
  
  })
  

    }
  

    
    

  render() {

    
    const userid = this.state.userid
    console.log(userid)
    const username = this.state.username
    console.log(username)
    const trips = this.state.trips
    console.log("trips", trips)
   
    const items = this.state.items    
    const selectedTripId = this.state.selectedTripId
    const selectedTrip = trips.filter((trip) => trip.id === selectedTripId)
    console.log("selectedTrip", selectedTrip.length)
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
        myTripText = {username === "" ? "" : `${username}'s trips`}
        myAccountText = {username === "" ? "get started" : "my account"}
        
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
              
              getItems = {(e) =>
                this.handleGetItems(e)}
 
              getPackItems = {(e) =>
              this.handleGetPackItems(e)}
              
              userid = {userid}
              
              getUser = {(id, username) => this.getUser(id, username)}

              username = {username}
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
              getUser = {(id, username) => this.getUser(id, username)} 
              username = {username}            
             
            />
          )}
        />

        <Route
          exact
          path= "/add-trip"
          render={(routerProps) => (
            <AddTripForm
             text = "plan a trip"
              routerProps={routerProps}
              handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(iframe, tripName, tripTravelers, tripDates)
              }

              trips = {trips}

              getUser = {(id, username) => this.getUser(id, username)}
              getTrips = {e => this.handleGetTrips(e)}

              username = {username}
              
              
            
            />
          )}
        />


        <Route
          exact
          path= "/edit-trip/:tripName"
          render={(routerProps) => (
            <EditTripForm
            text = "edit your trip"
              routerProps={routerProps}
              handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(iframe, tripName, tripTravelers, tripDates)
              }

              getUser = {(id, username) => this.getUser(id, username)}
              getTrips = {e => this.handleGetTrips(e)}
              selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip} 
              
              username = {username}
            
            />
          )}
        />

        <Route
          exact
          path= "/copy-trip/:tripName"
          render={(routerProps) => (
            <EditTripForm
            text = "copy your trip"
              routerProps={routerProps}
              handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
                this.addTrip(iframe, tripName, tripTravelers, tripDates)
              }

              getUser = {(id, username) => this.getUser(id, username)}
              getTrips = {e => this.handleGetTrips(e)}
              selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip} 
              
              username = {username}
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
              getPackItems = {e => this.handleGetPackItems(e)}
              handleDeleteTrip = {(idToDelete) => this.deleteTrip(idToDelete)}

              getUser = {(id, username) => this.getUser(id, username)}
              myTripText = {username === "" ? "" : `${username}'s trips`}

              username = {username}

            />
          )}
        />
        

          <Route
          path="/sign-in"
          render={(routerProps) => (
            <SignInBox
            routerProps={routerProps}
            getUser = {(id, username) => this.getUser(id, username)} 
            trips = {trips}
            
            handleAddTrip={(iframe, tripName, tripTravelers, tripDates) =>
              this.addTrip(iframe, tripName, tripTravelers, tripDates)
            }
            
            addButtonText = {username === ""? "Sign in to make your own item" : "Make your own item"}

            getTrips = {e => this.handleGetTrips(e)} 
            

            />)}/>

          <Route
          path="/sign-in2"
          render={(routerProps) => (
            <AuthStateApp
            routerProps={routerProps}
            getUser = {(id, username) => this.getUser(id, username)}             

            />)}/>



        <Route
          path="/trip-filter/:tripid"
          render={() => (
            <TripFilterForm
              selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip}
              selectedTripItems={selectedTripItems}
              tripItems={tripItems}
              username = {username}
            />
          )}
        />

        
        <Route
          path="/add-custom"
          render={(routerProps) => (
            <ItemAdjust
              routerProps={routerProps}
              text = "Make your own item"
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

            getUser = {(id, username) => this.getUser(id, username)}
            
            username = {username}
            />
          )}
        />

        <Route
          path="/trip/:tripName"
          render={(routerProps) => (
            <TripResults
              trips = {trips}
              routerProps={routerProps}
              selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip}
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


              getTrips = {(e) =>
                this.handleGetTrips(e)
              }

              addButtonText = {username === ""? "Sign in to make your own item" : "Make your own item"}

              username = {username}
              
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
                  addButtonText = {username === ""? "Sign in to make your own item" : "Make your own item"}
                  username = {username}
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
                text = "Customize your item"
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
                selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip}
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

                  getUser = {(id, username) => this.getUser(id, username)}    
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
                selectedTrip={selectedTrip.length === 0 ? TRIPS[0] : selectedTrip}
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

                getUser = {(id, username) => this.getUser(id, username)}    

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
