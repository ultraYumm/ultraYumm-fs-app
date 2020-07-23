import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripPackGraph extends Component {

  
  render() {


       const weightText = this.props.weight.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        
       
    return (
     
        <div className= "primaryFont black">
          <span className= "graphText">{weightText} grams </span>
          <i className= "fas fa-hiking"></i>
        </div>

       
   )}
  
}
  

export default TripPackGraph

