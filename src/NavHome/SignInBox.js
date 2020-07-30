import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import { Auth } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import AddTripForm from "../AddTrip/AddTripForm";
import { NavLink} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import SearchForm from "../Search/SearchForm";


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


     
      <AmplifyAuthenticator>
    <div className = "montebello">
   
    <div className = "primaryFont black greetings"
     onMouseOver = {this.props.getTrips}
    >Hi<strong><AuthStateApp/></strong>, where would you like to go?
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
  


    );
     
    const trips = this.props.trips
    
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
export default withRouter (SignInBox);
/*
<AddTripForm
text = "plan a trip"
routerProps={this.props.routerProps}
handleAddTrip = {this.props.handleAddTrip}
trips = {trips}
getTrips= {this.props.getTrips}
getUser ={this.props.getUser}
goButtonText = {this.props.goButtonText}
/>


<SearchForm
          routerProps={this.props.routerProps}
          handleUpdate={this.props.handleUpdate}
          handleResults={this.props.handleResults}
          getUser ={this.props.getUser}
          trips = {this.props.trips}
          getTrips = {this.props.getTrips}
          goButtonText = {this.props.goButtonText}
        />
*/