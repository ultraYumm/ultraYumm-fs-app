import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { Auth } from 'aws-amplify';
import { withRouter } from "react-router-dom";
import AuthStateApp from "./AuthStateApp";
import { AmplifyAuthenticator, AmplifyGreetings, AmplifyVerifyContact, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { NavLink} from 'react-router-dom'


Auth.currentCredentials().then(creds => console.log(creds));
// Auth.currentSession() does not currently support federated identities. Please store the auth0 session info manually(for example, store tokens into the local storage).



class SignInBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
     id: "",
     username: ""
    };
  }

  
  
  componentDidMount () { Auth.currentAuthenticatedUser().then(user => {
    console.log(user)
    let id = user.attributes.sub
    let username = user.username

    this.props.getUser(id, username)
   
    this.setState ({
      id,
      username
    }) });

    }

   

  render() {
    console.log(AuthState)
    console.log(AmplifySignOut)

    Auth.currentCredentials().then(creds => console.log(creds));


    const signIn = () => (

      <AmplifyAuthenticator>
    <div className = "montebello">
    <div className = "primaryFont black greetings">Hi&nbsp;{this.state.username}, go to&nbsp;<NavLink
          to={`/search-bar`}
          className = "noDeco bold"><i className ="fas fa-skiing"></i>&nbsp;
          Quick search
            </NavLink>&nbsp;&nbsp;
            <NavLink
          to={`/add-trip`}
          className = "noDeco bold"><i className="fas fa-seedling"></i>&nbsp;
            Plan a trip
            </NavLink>&nbsp;&nbsp;
      <NavLink
          to={`/my-trips`}
          className = "noDeco montebello"><i className ="fas fa-shoe-prints"></i>&nbsp;
            my trips
            </NavLink> 
   </div>
    <AmplifySignOut/> 
   
    </div>
  </AmplifyAuthenticator>
  


    );
     
  
    return (


      <div className= "home">
        <div className= "home">
          <img className= "uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <div className = "primaryFont"></div>
          <h1 className= "black montebello title">
         Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter<span>{signIn()}</span></span>
          </h1>
         
        </div>

        <AuthStateApp/>


       
       
      </div>
    );
  }
}
export default withRouter(SignInBox);