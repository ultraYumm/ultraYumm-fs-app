import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripCalorieGraph extends Component {

  
  
  render() {
 

    const calText = this.props.cals.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        
    

    return (
      <div className= "primaryFont black"> <span className = "graphText">
        {calText} cals </span>
        <i className="fas fa-fire-alt"></i>
      </div>
      
   )}
  
}
  

export default TripCalorieGraph
