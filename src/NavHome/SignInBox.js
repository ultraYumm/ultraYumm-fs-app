import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { withRouter } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';



class SignInBox extends Component {

  
  render() {

   

  

    

    const signIn = () => (
      <div
      >
      <AmplifyAuthenticator/>    
      <AmplifySignOut />
      
      </div>

    );
    
     
  
    return (


      <div className= "home">
        <div className= "home">
          <img className= "uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <h1 className= "black montebello title">
            Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter{signIn()}</span>
          </h1>
         
        </div>
        
       
      </div>
    );
  }
}
export default withRouter(SignInBox);