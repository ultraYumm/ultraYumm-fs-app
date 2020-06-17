import React, { Component } from 'react';
import './AddTrip.css';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';
import { NavLink} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Moment from 'react-moment';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class AddTripForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: "",
          endDate: ""
        }
      }
      
      


  
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


   const startDate = this.state.startDate
   const endDate = this.state.endDate

   if (moment(endDate).isBefore(moment(startDate)) == true)
   {this.props.routerProps.history.push("/")
}
   else this.props.handleAddTrip(tripId, iframe, tripName, tripTravelers, tripDates) ||
    this.props.routerProps.history.push("/my-trips");
      
      
    }
    
    const createStartDate = (startDate) =>{
        this.setState({
            startDate: startDate,
        });
      }


    const createEndDate = (endDate) =>{
    this.setState({
        endDate: endDate,
    });
    }


    


    const validateDate = () => {
        
        const startDate = this.state.startDate
        
        const endDate = this.state.endDate
      
        try {
        if (moment(endDate).isBefore(moment(startDate)) == true)
          throw "hmmm...end date should be later than current date"
        }
        catch(err) {
            return err;
          }

      }

    return (
        <form onSubmit={onSubmitForm}>
         <h2 className = "white"><i class="fas fa-shoe-prints"></i> Plan a trip!</h2>
            <div>
                <label htmlFor= "new-trip-name"><i class="fas fa-feather white"></i><span className= "labelWidthPlan white montebello">New trip name</span>
                    <input type="text" name="tripName" className="skinBackground black search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </div>

            <div>
                <label htmlFor= "start-date"><span className= "labelWidthPlan white montebello">Start date</span>
                <input type="date" name="startDate" id= "start-date"
                onChange={e => createStartDate(e.target.value)}
                
                /> </label> <br></br>
                
                
                <label htmlFor= "end-date"><span className= "labelWidthPlan white montebello">End date</span>
                <input type="date" name="endDate" id= "end-date"
                onChange={e => createEndDate(e.target.value)}
                /><span className = "error cloudBlue">{validateDate()}</span></label>
    
                            
            </div>

            <div>
                 <label htmlFor= "traveler-name"><i class="fas fa-user-friends white"></i><span className= "labelWidthPlan white montebello">Traveler names</span>
                 <input type="text" name="tripTravelers" className= "skinBackground purple names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </div>

            <div>
                 <label htmlFor= "map-link"><i class="fas fa-drafting-compass white"></i><span className= "labelWidthPlan white"><a href= "https://www.google.com/maps" target= "_blank"  className= "white montebello">Location URL</a></span>
                 <input type="url" name="tripURL" className= "skinBackground purple names" defaultValue = "https://earth.google.com/" id= "map-link"/>  
                </label>
            </div>

            <GoButton/>
   
        </form>
        
   )}
  
}

AddTripForm.propTypes = {
    startDate: "",
    endDate: ""
}


export default withRouter(AddTripForm)