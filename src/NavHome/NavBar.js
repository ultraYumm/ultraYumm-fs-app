import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';

import MyTrips from './MyTrips';
import uYhomeLogo from '../Images/uYhomeLogo.png';


class NavBar extends Component {
  render() {
    return (
     <div className= "navContainer">
         <nav className= "navbar skin" role= "navigation">
          <img className="homeLogo" src={uYhomeLogo} alt= "ultraYumm home button"/> 
          <MyTrips></MyTrips>     
      </nav>
      </div>
    );
  }
}
export default NavBar;