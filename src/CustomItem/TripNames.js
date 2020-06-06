import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class TripNames extends Component {


  static defaultProps = {
    trips:  {}
  }
  

  
  render() {

    const trips = this.props.trips
    
    function onlyOne(checkbox) {
      var checkboxes = document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
       
    return (
        <div className= "filterSelection"> 
            <ul className= "scroll"> 
            {trips.map((trip, key)=> (
              <li key= {key}>
              <label className= "labelContainer"> {trip.name}
                   <input 
                   name= "check"
                   type= "checkbox"
                   onClick={() => {
                    const selectedTrip = trip
                    onlyOne(this)
                    this.props.handleSelectTrip(selectedTrip)
                  
                  }}
                   
                   />
                   <span className= "checkmark"></span>
               </label>
              </li>
            ))}   
            </ul>
       </div>
     )}
  
}
  

export default TripNames