import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import TripNames from "../CustomItem/TripNames";


class Add extends Component {



  constructor(props) {
    super(props);
    this.state = {
      tripName: "",
      selectedTripId: "",
      selectedTrip: {},
      tripDates: []
    };
  }

  selectTrip = (selectedTrip) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names

    

    this.setState({
      selectedTrip: selectedTrip,    
      tripName: tripName,
      tripDates: tripDates,
      tripTravelers: tripTravelers
    });
  };

     
  render() {


  
      
 
const trips = this.props.trips

    return (
        <td className="add">
        <span className="add">
          <TripNames 
          trips={trips}
          handleSelectTrip={(selectedTrip) =>
            this.selectTrip(selectedTrip)
          } 
          
          />
        </span>
      </td>
          
   )}
  
}
  

export default Add