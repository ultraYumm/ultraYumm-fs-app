import React, { Component } from 'react';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import DeleteButton from '../FormElements/DeleteButton';
import '../FormElements/FormElements.css';
import { withRouter } from "react-router-dom";
import config from "../config";
import { TRIPS, TRIP_NAME, TRAVELER_NAMES } from "../Defaults";


class AddTripForm extends Component {

  static defaultProps = {
    trips: []
  };

    constructor(props) {
    
        super(props);
       
        this.state = {
          startDate: null,
          endDate:  null,
          name: TRIPS[0].name
        }
      }
      

  render() {

   
    const moment= require('moment') 
  
    const  re = /:\s|\s/;

    const userid = this.props.userid
    
    const onSubmitForm = (e) => {

      e.preventDefault();

      let iframe =e.target.tripURL.value
      let tripName = e.target.tripName.value
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

        const inputValues = {
            name: tripName,
            iframe: iframe,
            traveler_names: tripTravelers,
            trip_dates: tripDates[0],
            userid: userid
          }

        const API = config.API_UY_ENDPOINT   
        const endpoint = config.endpointT

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
        
        this.props.handleAddTrip(iframe, tripName, tripTravelers, tripDates, userid)
    
        this.props.routerProps.history.push("/my-trips")
      
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
        return (" hmmm...end date should be later than current date")
           
      }

    const createTripName = (name) =>{
      this.setState({
          name: name,
      });
      }

    const createTravNames = (names) =>{
      this.setState({
          traveler_names: names,
      });
      }

    const travNames = this.state.traveler_names

    
    const checkDupes = () => {
  
      if (travNames) {
        const arr = travNames.split(re)
        let duplicate = arr.reduce((acc,currentValue,index, array) => {
          if(array.indexOf(currentValue)!==index && !acc.includes(currentValue)) acc.push(currentValue);
          return acc;
        }, []);

       
        if (duplicate.length>0) {return ('please pick a unique name for the one and only ' + duplicate.join(','))}
    
    } 
    
      else return ("")
    }
      
    const tripName = this.state.name
    
    
    const validateTripName = () => {
        if (this.props.trips.find((trip) => trip.name === tripName)){
        return (" this nice trip name already exists, please pick a different name")}
        else return ("")
           
      }

      const nameCheck = () => ((this.props.trips.map((trip) => trip.name === tripName)))
      const checkArray = nameCheck()
      const dupName = checkArray.includes(true)
  
      const startDate = this.state.startDate
      const endDate = this.state.endDate

      const dateCheck = () => (moment(endDate).isBefore(moment(startDate)) === true)
      const backDates = (dateCheck())

      const  error = () => {"duplicate trip name or backwards dates"}

    

    return (
        <form className= "planTrip" onSubmit={dupName | backDates === true? error : onSubmitForm}>
         <h2 className= "white"><i className ="fas fa-shoe-prints"></i> Plan a trip! <GoButton
         /></h2> 
   
            <div className= "labelWidthPlan">
                <label htmlFor= "new-trip-name"><i className ="fas fa-feather white"></i><span className= "labelWidthPlan white montebello">New trip name</span>
                    <input type="text" name="tripName" 
                    maxlength="12"
                    className="skinBackground black search" id= "new-trip-name"  placeholder = {TRIP_NAME} required                    onChange={e => createTripName(e.target.value)}
                    /><span className= "error cloudBlue">{validateTripName()}</span>
                </label>
            </div>

            <div className= "labelWidthPlan">
                 <label htmlFor= "traveler-name"><i className ="fas fa-user-friends white"></i><span className= "labelWidthPlan white montebello">Traveler names</span>
                 <input type="text" name="tripTravelers" className= "skinBackground purple names" 
                 defaultValue = {TRAVELER_NAMES}
                 id= "traveler-name"
                 onChange={e => createTravNames(e.target.value)}
                 
                 /><span className= "error cloudBlue">{checkDupes()}</span>
                </label>
            </div>
            <div className= "labelWidthPlan">
                 <label htmlFor= "map-link"><i className ="fas fa-drafting-compass white"></i><span className= "labelWidthPlan white"><a href= "https://www.google.com/" target= "_blank" rel="noopener noreferrer" className= "white montebello">Website</a></span>
                 <input type="url" name="tripURL" className= "skinBackground purple names"   defaultValue = {TRIPS[0].iframe} id= "map-link"/>  
                </label>
            </div><br></br>

            <div className= "dates">
                <div className= "labelWidthDates">
                <label htmlFor= "start-date"><span className= "white montebello labelWidthPlan">Start date</span>
                <input type="date" name="startDate" 
                id= "start-date"
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