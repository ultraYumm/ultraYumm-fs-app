import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { Auth } from 'aws-amplify';
import { AmplifyAuthenticator,  AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { NavLink} from 'react-router-dom';
import { withRouter } from "react-router-dom";


class SignInBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
     id: "",
     username: ""
    };
  }

  
  componentDidMount () { 
   
    
    try {Auth.currentAuthenticatedUser()
    .catch(err => console.log(err))
    .then(user => {
 
    const id = user.attributes.sub
    const username = user.username

    this.props.getUser(id, username)

    .then((id, username) => 
    this.setState ({
      id,
      username
    }) )
    
  })
  .catch(err => console.log(err))
  

  }

  catch (ex) {
    console.log("waiting for login", ex);
    alert("Waiting for login");
  }

}

  render() {

    function refreshPage() {
      window.location.reload(false);
    }
    
    const AuthStateApp = () => {
      const [authState, setAuthState] = React.useState();
      const [user, setUser] = React.useState();
  
      React.useEffect(() => {
          return onAuthUIStateChange((nextAuthState, authData) => {
              setAuthState(nextAuthState);
              setUser(authData)
          });
      }, []);
  
      
    return authState === AuthState.SignedIn && user ? (
       
            <span>&nbsp;{user.username}
        </span>
      ) : "";
  }

    const signIn = () => (


     <div>
         
      <AmplifyAuthenticator>
    <div className = "montebello"
     >
   
    <div className = "primaryFont black greetings"
     onMouseOver = {this.props.getTrips}
    ><div className ="hi">Hi<strong><AuthStateApp/></strong>, where would you like to go?</div>
    <br></br>
    <NavLink
          to={`/add-trip`}
          className = "noDeco bold goTo"><i className="fas fa-seedling"></i>
            <span className="goTo">plan a trip</span>
            </NavLink> 
    <br></br><NavLink
          to={`/search-bar`}
          className = "noDeco bold goTo"><i className ="fas fa-skiing"></i>&nbsp;
           <span className="goTo"
           
           >quick item search to see calorie and weight info</span>
            </NavLink>
            <br></br>
           
      <NavLink
          to={`/my-trips`}
          className = "noDeco montebello goTo"><i className ="fas fa-shoe-prints"></i>&nbsp;my saved trips
            </NavLink> 
            <br></br>
            <NavLink
          to={`/add-custom`}
          className = "noDeco montebello goTo"
         ><i className="fas fa-stroopwafel"></i>&nbsp;
          <span className="goTo">make your own pack item</span>
            </NavLink> 
   </div>
   <div onClick = {refreshPage}>
    <AmplifySignOut/> 
    </div>
    </div>
   
  </AmplifyAuthenticator>
  </div>
  


    );

    return (


      <div className= "home">
        <div className= "home">
          <img className= "uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <div className = "primaryFont"></div>
          <h1 className= "black montebello title">
         Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter
            <br></br><div 
         
          className={ this.props.myAccountText === "get started"?' hover primaryFont newAccount'  : ' invisible'}>for new accounts, a confirmation code will be emailed after sign-up</div>
            <span>{signIn()}</span></span>
           
          </h1>
         
        </div>
       
      </div>
    );
  }
}
export default withRouter (SignInBox);
