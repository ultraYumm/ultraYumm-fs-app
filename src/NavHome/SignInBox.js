import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { Auth } from 'aws-amplify';
import { withRouter } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';


//Auth.currentAuthenticatedUser().then(user => console.log(user));

//Auth.currentCredentials().then(creds => console.log(creds));
// Auth.currentSession() does not currently support federated identities. Please store the auth0 session info manually(for example, store tokens into the local storage).



class SignInBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
     id: "",
     username: ""
    };
  }

  

   
handleUsers(id) {
 
    this.setState ({
      id
    })

  } 
  
  componentDidMount () { Auth.currentAuthenticatedUser().then(user => {
    console.log(user)
    let id = user.attributes.sub
    let username = user.username
   
    this.setState ({
      id,
      username
    }) });

    }





//localStorage.get("variable name")
  render() {

    console.log(this.state.id)
    console.log(this.state.username)

    


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