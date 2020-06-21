import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import { NavLink} from 'react-router-dom'
import MyTrips from './MyTrips';
import uYhomeLogo from '../Images/uYhomeLogo.png';



class NavBar extends Component {

 
  render() {

    const getTrips = this.props.getTrips
    

    
    return (
     <div className= "navContainer"
     onClick = {getTrips}>
         <nav className= "navbar skin noDeco" role= "navigation"
         
         
         >
         <NavLink
         to={`/`}>
          <img className="homeLogo" src={uYhomeLogo} alt= "ultraYumm home button"/>
          </NavLink> 
      
      </nav>
      <MyTrips

      getTrips = {getTrips}
    

      
      />   
      </div>
    );
  }
}
export default NavBar;