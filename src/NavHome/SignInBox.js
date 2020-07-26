import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { Auth } from 'aws-amplify';
import { withRouter } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import AddTripForm from "../AddTrip/AddTripForm";
import { NavLink} from 'react-router-dom';


class SignInBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
     id: "",
     username: ""
    };
  }

  
  
  componentDidMount () { Auth.currentAuthenticatedUser().then(user => {
   
    const id = user.attributes.sub
    const username = user.username

    this.props.getUser(id, username)
   
    this.setState ({
      id,
      username
    }) });

   

  
  }
  

  render() {

    function refreshPage() {
      window.location.reload(false);
    }
  
    const trips = this.props.trips


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

      <AmplifyAuthenticator>
    <div className = "montebello">
   
    <div className = "primaryFont black greetings">Hi<strong><AuthStateApp/></strong>, go to
    <br></br>
    <NavLink
          to={`/add-trip`}
          className = "noDeco bold goTo"><i className="fas fa-seedling"></i>
            <span className="goTo">plan a trip</span>
            </NavLink> 
    <br></br><NavLink
          to={`/search-bar`}
          className = "noDeco bold goTo"><i className ="fas fa-skiing"></i>
           <span className="goTo">quick search</span>
            </NavLink>
            <br></br>
           
      <NavLink
          to={`/my-trips`}
          className = "noDeco montebello goTo"><i className ="fas fa-shoe-prints"></i>my trips
            </NavLink> 
            <br></br>
            <NavLink
          to={`/add-custom`}
          className = "noDeco montebello goTo"
         ><i className="fas fa-stroopwafel"></i>
          <span className="goTo">make your own item</span>
            </NavLink> 
   </div>
    <div onClick = {refreshPage}>
    <AmplifySignOut/> 
    </div>
   
    </div>
    <AddTripForm
         text = "plan a trip"
         routerProps={this.props.routerProps}
         handleAddTrip = {this.props.handleAddTrip}
         trips = {trips}
         getTrips= {this.props.handleGetTrips}
         getUser ={this.props.getUser}
        />
  </AmplifyAuthenticator>
  


    );
     
  
    return (


      <div className= "home">
        <div className= "home">
          <img className= "uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <div className = "primaryFont"></div>
          <h1 className= "black montebello title">
         Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter
           
            <span>{signIn()}</span></span>
           
          </h1>
         
        </div>
       
      </div>
    );
  }
}
export default withRouter(SignInBox);