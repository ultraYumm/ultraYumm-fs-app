import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import { NavLink} from 'react-router-dom'
import SignIn from './SignIn';
import uYhomeLogo from '../Images/uYhomeLogo.png';

class NavBar extends Component {

 
  render() {

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
      myAccountText = {this.props.myAccountText}
      /> 
 
    
  
      </div>
    );
  }
}
export default NavBar;


 