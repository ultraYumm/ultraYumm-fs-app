import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';
import { NavLink} from 'react-router-dom'




class TripDates extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
    	checked: false
	}
  }
  
     
  render() {
  
    
  const defaultDay = this.props.defaultDay
  
  const tripDates = this.props.tripDates.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')

  console.log(tripDates)
  const id = this.props.id
  function onlyOne(checkbox) {
  const checkboxes =  document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
      
    })
}



    return (
    
      <ul className= "scroll"> 
      {tripDates.map((date, key)=> (
          <li key= {date}>
          <label className="labelContainer">
            {date === defaultDay | tripDates[0] === "" ? 
            <NavLink className = "noDeco"
            to={`/add-trip`}
            >
            no dates set for <strong>{this.props.name}</strong> - create a new trip with your custom dates and travelers</NavLink>
            
            :<Moment format= "MMM/DD">{date}</Moment>}
              <input type="checkbox"
              name= "check"
              defaultValue = {date}
             
              onClick={() => {
                console.log(date)
                            const selectedDay = date
                            onlyOne(this)
                            this.props.handleSelectDay(selectedDay, id)
                            this.setState ({
                              checked: true,
                              date: selectedDay
                            })
                          
                          }}
              />
              <span 
              date = {date} 
              className= {"checkmark " + (this.state.selectedDay === date? "checked" : "notChecked")}></span>
          </label>
          </li>))}

        </ul>
  
     )
      
         
      }}


export default TripDates

