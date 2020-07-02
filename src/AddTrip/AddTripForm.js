import React, { Component } from 'react';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';
import { withRouter } from "react-router-dom";
import config from "../config";


class AddTripForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: null,
          endDate: null
        }
      }
      
      

  render() {

    const moment= require('moment') 
    
    const onSubmitForm = (e) => {

      e.preventDefault();

      let iframe =e.target.tripURL.value
      let tripName = e.target.tripName.value
      var re = /:\s|,\s/;
      let tripTravelers = e.target.tripTravelers.value.split(re)
      let userid = 1

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

        const inputValues = {
            name: tripName,
            iframe: iframe,
            traveler_names: tripTravelers,
            trip_dates: tripDates,
            userid: userid
          }

      

        const API = config.API_UY_ENDPOINT   
        const endpoint = config.endpointT

        const url = API + endpoint;
        console.log(url)
        const API_TOKEN = config.API_UY_KEY


        const startDate = this.state.startDate
        const endDate = this.state.endDate

        if (moment(endDate).isBefore(moment(startDate)) === true)
        {this.props.routerProps.history.push("/")}
        else 
        fetch(url, {
          
            method: 'POST',
            headers: {
              Authorization: `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify(inputValues),
            
          }
          )

          //console.log(inputValues)

         

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
        
        this.props.handleAddTrip(iframe, tripName, tripTravelers, tripDates, userid)
    
        this.props.routerProps.history.push("/my-trips")
            console.log(inputValues)
      
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
      
       
        if (moment(endDate).isBefore(moment(startDate)) === true)
        return ("hmmm...end date should be later than current date")
           
      }

    return (
        <form onSubmit={onSubmitForm}>
         <h2 className= "white"><i className ="fas fa-shoe-prints"></i> Plan a trip! <GoButton/></h2> 
   
            <div className= "labelWidthPlan">
                <label htmlFor= "new-trip-name"><i className ="fas fa-feather white"></i><span className= "labelWidthPlan white montebello">New trip name</span>
                    <input type="text" name="tripName" className="skinBackground black search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </div>

            <div className= "labelWidthPlan">
                 <label htmlFor= "traveler-name"><i className ="fas fa-user-friends white"></i><span className= "labelWidthPlan white montebello">Traveler names</span>
                 <input type="text" name="tripTravelers" className= "skinBackground purple names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </div>
            <div className= "labelWidthPlan">
                 <label htmlFor= "map-link"><i className ="fas fa-drafting-compass white"></i><span className= "labelWidthPlan white"><a href= "https://www.google.com/maps" target= "_blank" rel="noopener noreferrer" className= "white montebello">Location URL</a></span>
                 <input type="url" name="tripURL" className= "skinBackground purple names" defaultValue = "https://earth.google.com/" id= "map-link"/>  
                </label>
            </div><br></br>

            <div className= "dates">
                <div className= "labelWidthDates">
                <label htmlFor= "start-date"><span className= "white montebello labelWidthPlan">Start date</span>
                <input type="date" name="startDate" id= "start-date"
                onChange={e => createStartDate(e.target.value)}
                
                /> </label> <br></br>

            </div>
            <div className= "labelWidthDates">
                <label htmlFor= "end-date"><span className= "white montebello labelWidthPlan">End date</span>
                <input type="date" name="endDate" id= "end-date"
                onChange={e => createEndDate(e.target.value)}
                /><span className= "error cloudBlue">{validateDate()}</span></label>
            </div>
           </div>
       
        </form>
        
   )}
  
}



export default withRouter(AddTripForm)