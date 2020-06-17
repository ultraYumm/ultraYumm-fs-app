import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripCalorieGraph extends Component {

  
  
  render() {
 

    const cals= this.props.cals/100
    const calText = this.props.cals.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        
    

    return (
      <div className = "primaryFont black"> <span className = "graphText">
        {calText} cals </span>
        <i class="fas fa-fire-alt">
          </i>
        </div>
      
   )}
  
}
  

export default TripCalorieGraph

/*<svg width="100" height= "25"> 
     
     <g className= "bar skinBackground">
       <rect className= "blackBackground" width= {cals} height="30"></rect>
       <text className= "primaryFont" x="0" y="12" dy=".35em">{calText} cal.</text>
     </g>
   </svg>*/