import React, { Component } from 'react';
import './NavBar.css';
import '../Font/Font.css';
import Home from './Home';
import MyTrips from './MyTrips';


class NavBar extends Component {
  render() {
    return (
      <nav className= "navbar skin" role= "navigation">
          <Home></Home>
          <MyTrips></MyTrips>          
      </nav>
    );
  }
}
export default NavBar;