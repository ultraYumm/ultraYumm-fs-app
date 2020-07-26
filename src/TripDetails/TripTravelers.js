import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripTravelers extends Component {
  static defaultProps = {
    tripTravelers:  ["TBD"],
  }

  render() {
      
    const tripTravelers = this.props.tripTravelers.toString().replace('{', "").replace("}","").replace(/"/g,"").replace("","").replace(/\s+/g,"").trim().split(',')


    const stateName = this.props.stateName
 
    
    
  
      return (
      
          <ul className= "scroll"> 
          {tripTravelers.map((name, key)=> (
            <li key= {key}>

            <label className="labelContainer"><span className={ stateName === name ?  ' red bold'  : ' black'}>{name}</span>
                <input type="checkbox"
                  name= "radio"
                  defaultValue = {name}
                  onClick={() => {
                  const selectedTraveler = name
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