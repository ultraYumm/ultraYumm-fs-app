import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripCalorieGraph extends Component {

  
  
  render() {
 

    const cals= this.props.cals/100
    const calText = this.props.cals.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        
    

    return (
      <svg width="300"> 
     
     <g className= "bar skinBackground">
       <rect className= "blackBackground" width= {cals} height="30"></rect>
       <text className= "primaryFont" x="0" y="12" dy=".35em">{calText} cal.</text>
     </g>
   </svg>
   )}
  
}
  

export default TripCalorieGraph