import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';



class TripDates extends Component {

  static defaultProps = {
    tripDates:  ["no dates set"],
  }
  
        
  render() {
  
    
    const tripDates = this.props.tripDates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')

    console.log(tripDates)
    
    const stateDate = this.props.stateDate

    const defaultDay = this.props.defaultDay
  
  
  
      return (
      
        <ul className= "scroll"> 
        {tripDates.map((date, key)=> (
            <li key= {key}>
            <label className="labelContainer"><span
            className={ stateDate === date ?  ' red bold'  : ' black'}
            >
              {date === defaultDay | tripDates[0] === "" ? 
            "no dates set"
              :<Moment format= "MMM/DD">{date}</Moment>}</span>
                <input type="checkbox"
                name= "radio"
                defaultValue = {tripDates[0]}        
                onClick={() => {
               
                              const selectedDay = date
                              this.props.handleSelectDay(selectedDay)
                            
                            }}
                />
                     <span className="checkmark"></span>
            </label>
            </li>))}
  
          </ul>
    
       )
        
           
        }}
  
  
  export default TripDates

