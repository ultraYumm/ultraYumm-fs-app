import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';
import { NavLink} from 'react-router-dom'
import { ITEMS, TRIPS, PACKITEMS } from "../Defaults";




class TripDates extends Component {


  constructor(props) {
    super(props);
    this.state = {
    	checked: false
	}
  }
  
     
  render() {
  
  const stateDate = this.props.stateDate   
  const defaultDay = this.props.defaultDay
  const tripDates = this.props.tripDates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')
  const id = this.props.id
 



    return (
    
      <ul className= "scroll"> 
      {tripDates.map((date, key)=> (
          <li key= {key}>
          <label className="labelContainer">
          
          <span className={ stateDate === date ?  ' red bold'  : ' black'}>
            {date === defaultDay | tripDates[0] === "" ? 
            <NavLink className = "noDeco"
            to={`/sign-in`}
            >
            plan a trip</NavLink>
            :<Moment format= "MMM/DD">{date}</Moment>}
            </span>
          
              <input type="radio"
           
              defaultValue = {date}
             
              onClick={() => {
             
                            const selectedDay = date
                            this.props.handleSelectDay(selectedDay, id)
                            this.setState ({
                              checked: true,
                              date: selectedDay
                            })
                          
                          }}
              />
               <span className= "checkmark"></span>
          </label>
          </li>))}

        </ul>
  
     )
      
         
      }}


export default TripDates

