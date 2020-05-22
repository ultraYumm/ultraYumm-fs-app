import React, { Component } from 'react';
import '../Font/Font.css';
import './Home.css';
import { NavLink} from 'react-router-dom'


class MyTrips extends Component {
  render() {
    return (
      <div  className= "myTrips white montebello">
        <NavLink className = "noDeco"
        to={`/my-trips`}
        >My trips</NavLink>
      </div>
    );
  }
}
export default MyTrips;