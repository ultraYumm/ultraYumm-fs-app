import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import { NavLink} from 'react-router-dom'
import MyTrips from './MyTrips';
import uYhomeLogo from '../Images/uYhomeLogo.png';



class NavBar extends Component {
  render() {
    return (
     <div className= "navContainer">
         <nav className= "navbar skin" role= "navigation">
         <NavLink
         to={`/`}>
          <img className="homeLogo" src={uYhomeLogo} alt= "ultraYumm home button"/>
          </NavLink> 
      
      </nav>
      
      
      <MyTrips></MyTrips>   
      </div>
    );
  }
}
export default NavBar;