import React, { Component } from 'react';
import '../Font/Font.css';
import './Home.css';
import { NavLink} from 'react-router-dom'


class MyTrips extends Component {
  render() {

   
   
    return (
      <div  className= "myTrips montebello"
      

      >
        <NavLink className = "noDeco"
        to={`/my-trips`}
        >
        <span className = "myTrips white"
        >{this.props.myTripText}</span></NavLink>
      </div>
    );
  }
}
export default MyTrips;