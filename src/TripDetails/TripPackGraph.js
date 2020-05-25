import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripPackGraph extends Component {

  
  render() {
       
    return (
      <svg className= "pack" width="400" height="200">
      <text x="0" y="0" dy=".70em">Pack weight: 80 lbs.</text>
      <rect x="50" y="20" rx="20" ry="20" width="120" height="150"/>
    </svg>
   )}
  
}
  

export default TripPackGraph