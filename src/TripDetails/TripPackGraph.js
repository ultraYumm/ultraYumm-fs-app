import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripPackGraph extends Component {

  
  render() {


    const weight= this.props.weight*20
    const weightText = this.props.weight.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        
       
    return (
     
        <div className = "primaryFont black">
        <span className = "graphText">{weightText} kg </span>
        <i className ="fas fa-hiking">
        </i>
        </div>

       
   )}
  
}
  

export default TripPackGraph


/*<svg width="50" height="70">
<g className= "bar skinBackground">
<rect className= "blackBackground" width={weight} height="120"  rx="15" ry="15"></rect>
<text className= "primaryFont" x="0" y="12" dy=".35em">{weightText}kg</text>
</g>
</svg>*/