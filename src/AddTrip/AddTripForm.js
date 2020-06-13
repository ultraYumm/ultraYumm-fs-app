import React, { Component } from 'react';
import './AddTrip.css';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';
import { NavLink} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Moment from 'react-moment';
import { withRouter } from "react-router-dom";

class AddTripForm extends Component {

  
  render() {

    const moment= require('moment') 
    
    const onSubmitForm = (e) => {

      e.preventDefault();
      let tripId = uuidv4()
      let iframe =e.target.tripURL.value
      let tripName = e.target.tripName.value
      var re = /:\s|,\s/;
      let tripTravelers = e.target.tripTravelers.value.split(re)

      const  getDates = () => {
        var dateArray = [];
        var currentDate = moment(e.target.startDate.value)
        var endDate = moment(e.target.endDate.value)
        while (currentDate <= endDate) {
            dateArray.push(moment(currentDate).format())
            currentDate = moment(currentDate).add(1, 'd');
        }
        return dateArray;
   }

      let tripDates = [getDates()]
      console.log(tripDates)


      this.props.handleAddTrip(tripId, iframe, tripName, tripTravelers, tripDates)

      this.props.routerProps.history.push("/my-trips");
      
      
    }

    return (
        <form onSubmit={onSubmitForm}>
         <h2 className = "white">Plan a trip!</h2>
            <p>
                <label htmlFor= "new-trip-name"><span className= "labelWidth white">New trip name</span>
                    <input type="text" name="tripName" className="redBackground white search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </p>

            <p>
                <label htmlFor= "start-date"><span className= "labelWidth white">Start date</span>
                <input type="date" name="startDate" id= "start-date"/> </label> <br></br>
                <label htmlFor= "end-date"><span className= "labelWidth white">End date</span>
                <input type="date" name="endDate" id= "end-date"/> </label>            
            </p>

            <p>
                 <label htmlFor= "traveler-name"><span className= "labelWidth white">Traveler names</span>
                 <input type="text" name="tripTravelers" className= "redBackground white names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </p>

            <p>
                 <label htmlFor= "map-link"><span className= "labelWidth white"><a href= "https://www.google.com/maps" target= "_blank"  className= "white">Location URL</a></span>
                 <input type="url" name="tripURL" className= "redBackground white names" defaultValue = "https://earth.google.com/" id= "map-link"/>  
                </label>
            </p>

            <GoButton/>
   
        </form>
        
   )}
  
}
  

export default withRouter(AddTripForm)