import React, { Component } from 'react';
import '../Font/Font.css';
import './Home.css';
import { NavLink} from 'react-router-dom'


class MyTrips extends Component {
  render() {

    const getTrips = this.props.getTrips
   
    return (
      <div  className= "myTrips montebello"
   
      onClick = {getTrips}
      

      >
        <NavLink className = "noDeco"
        to={`/my-trips`}
        >
        <span className = "myTrips white"
        >My trips</span></NavLink>
      </div>
    );
  }
}
export default MyTrips;