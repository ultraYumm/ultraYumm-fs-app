import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripTravelers extends Component {
  static defaultProps = {
    tripTravelers:  [""],
  }

  render() {
      
    const tripTravelers = this.props.tripTravelers
    console.log(tripTravelers)
   
    function onlyOne(checkbox) {
   
      const checkboxes =  document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
    
  
      return (
        <div className= "filterSelection"> 
          <ul className= "scroll"> 
          {tripTravelers.map((name)=> (
            <li key= {name}>

            <label className="labelContainer"> {name}
                <input type="checkbox"
                  name= "check"
                  onClick={() => {
                  const selectedTraveler = name
                  onlyOne(this)
                  this.props.handleSelectTraveler(selectedTraveler)
                
                }}
                />
                <span className="checkmark"></span>
            </label>
            </li>
          ))}   
          </ul>
        </div>
     )}
    
  }
  

export default TripTravelers
