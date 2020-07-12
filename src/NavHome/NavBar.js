import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import { NavLink} from 'react-router-dom'
import MyTrips from './MyTrips';
import SignIn from './SignIn';
import {AuthStateApp} from './SignTest';
import uYhomeLogo from '../Images/uYhomeLogo.png';

import { AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';


class NavBar extends Component {

 
  render() {

    const getTrips = this.props.getTrips

    return (
     <div className= "navContainer"
     >
         <nav className= "navbar skin noDeco" role= "navigation"
         
         
         >
         <NavLink
         to={`/`}>
          <img className="homeLogo" src={uYhomeLogo} alt= "ultraYumm home button"/>
          </NavLink> 
      
      </nav>

      <SignIn
      /> 
 
      <MyTrips
      getTrips = {getTrips}
      /> 
       
  
      </div>
    );
  }
}
export default NavBar;