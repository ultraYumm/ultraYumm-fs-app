import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import Moment from 'react-moment';




class TripDates extends Component {

  static defaultProps = {
    tripDates:  [""],
  }
  
     
  render() {
  const name = this.props.name  
  console.log(name)
  const tripDates = this.props.tripDates
  const id = this.props.id
  function onlyOne(checkbox) {
  const checkboxes =  document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}



    return (
      <ul className= "scroll"> 
      {tripDates.map((date)=> (
          <li key= {date}>
          <label className="labelContainer">
            {name == ""? "" :<Moment format= "MMM/DD">{date}</Moment>}
              <input type="checkbox"
              name= "check"
              onClick={() => {
                            const selectedDay = date
                            onlyOne(this)
                            this.props.handleSelectDay(selectedDay, id)
                          
                          }}
              />
              <span className="checkmark"></span>
          </label>
          </li>))}

        </ul>
     
     )
      
         
      }}


export default TripDates

