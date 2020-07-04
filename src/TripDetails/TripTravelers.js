import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripTravelers extends Component {
  static defaultProps = {
    tripTravelers:  ["TBD"],
  }

  render() {
      
    const tripTravelers = this.props.tripTravelers.toString().split(',')
    console.log(tripTravelers)
  
   
    function onlyOne(checkbox) {
   
      const checkboxes =  document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
    
  
      return (
      
          <ul className= "scroll"> 
          {tripTravelers.map((name)=> (
            <li key= {name}>

            <label className="labelContainer">{name}
                <input type="checkbox"
                  name= "check"
                  defaultValue = {name}
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
     
     )}
    
  }
  

export default TripTravelers


/*{name.substring(1, name.length-1)}*/