import React, { Component } from 'react';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';
import { withRouter } from "react-router-dom";
import config from "../config";
import { TRIPS } from "../Defaults";
import { Auth } from 'aws-amplify';
import Moment from 'react-moment';





class EditTripForm extends Component {

  static defaultProps = {
    trips: [],
    selectedTrip: TRIPS[0],
    name: TRIPS[0].name,
  };

    constructor(props) {
    
        super(props);
        const selectedTrip = this.props.selectedTrip
        this.state = {
          startDate: null,
          endDate:  null,
          name: TRIPS[0].name,
          id: "",
          username: "",
          selectedTrip: selectedTrip.length === 0? TRIPS[0] : selectedTrip
          
        }
      }
      
      componentDidMount () { Auth.currentAuthenticatedUser().then(user => {
        let id = user.attributes.sub
        let username = user.username
    
        this.props.getUser(id, username)


        this.setState ({
          id,
          username
        })
       
       
      });
    
        }

  render() {

   
    const moment= require('moment') 
  
    const  re = /:\s|\s/;

    const userid = this.state.id
    
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

        this.props.getTrips(e)
    
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

  const selectedTrip = this.state.selectedTrip
  console.log("selectedTrip", selectedTrip)
  console.log("selectedTripdatelenght", selectedTrip[0].trip_dates.length)

  const datesArray = selectedTrip[0].trip_dates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')

  console.log(datesArray[0])

  const currentStartDate = <Moment format= "MM/DD/YY">{datesArray[0]}</Moment>
  const currentEndDate = <Moment format= "MM/DD/YY">{datesArray.pop()}</Moment>


    
    
    const validateTripName = () => {
        if (this.props.trips.find((trip) => trip.name === tripName)){
        return (` ${tripName} already exists, please create a different name`)}
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

      
      const getTrips = this.props.getTrips

    return (
        <form className= "myPlans" onSubmit={dupName | backDates === true? error : onSubmitForm}>
         <h2 className= "white"><i className="fas fa-seedling"></i>&nbsp;{this.props.text}&nbsp;<GoButton
         username = {this.props.username}
         /></h2> 
   
            <div className= "labelWidthPlan"
            onMouseOver = {getTrips}>
                <label htmlFor= "new-trip-name"><i className ="fas fa-feather white"></i><span className= "labelWidthPlan white montebello">New trip name</span>
                    <input type="text" name="tripName" 
                    maxLength= "18"
                    className="skinBackground black search" id= "new-trip-name"  defaultValue = {selectedTrip.length === 0 ? TRIPS[0].name : selectedTrip[0].name} required                    onChange={e => createTripName(e.target.value)}
                    /><span className= "error cloudBlue">{validateTripName()}</span>
                </label>
            </div>

            <div className= "labelWidthPlan">
                 <label htmlFor= "traveler-name"><i className ="fas fa-user-friends white"></i><span className= "labelWidthPlan white montebello">Traveler names</span>
                 <input type="text" name="tripTravelers" className= "skinBackground purple names" 
                 defaultValue = {selectedTrip.length === 0 ? TRIPS[0].traveler_names : selectedTrip[0].traveler_names.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").replace(/,/g , " ").trim().split(',')}
                 id= "traveler-name"
                 onChange={e => createTravNames(e.target.value)}
                 
                 /><span className= "error cloudBlue">{checkDupes()}</span>
                </label>
            </div>
            <div className= "labelWidthPlan">
                 <label htmlFor= "map-link"><i className ="fas fa-drafting-compass white"></i><span className= "labelWidthPlan white"><a href= "https://www.google.com/" target= "_blank" rel="noopener noreferrer" className= "white montebello">Website</a></span>
                 <input type="url" name="tripURL" className= "skinBackground purple names"   defaultValue = {selectedTrip[0].iframe} id= "map-link"/>  
                </label>
            </div><br></br>

            <div className= "dates">
                <div className= "labelWidthDates">
    <label htmlFor= "start-date"><span className= "white montebello labelWidthPlan ">Start date<span></span>:&nbsp;<span>{selectedTrip[0].trip_dates.length < 3  ? "none set" : currentStartDate}</span></span> 
                <input type="date" name="startDate" 
                id= "start-date"
                onChange={e => createStartDate(e.target.value)}
                
                /> </label> <br></br>

            </div>
            <div className= "labelWidthDates">
                <label htmlFor= "end-date"><span className= "white montebello labelWidthPlan">End date<span></span>:&nbsp;<span>{selectedTrip[0].trip_dates.length < 3  ? "none set" : currentEndDate}</span></span> 
                <input type="date" name="endDate" id= "end-date"
                onChange={e => createEndDate(e.target.value)}
                /><span className= "error cloudBlue">{validateDate()}</span></label>
            </div>
           </div>
       
        </form>
        
   )}
  
}



export default withRouter(EditTripForm)