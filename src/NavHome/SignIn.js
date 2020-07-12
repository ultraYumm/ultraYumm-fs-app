import React, { Component } from 'react';
import '../Font/Font.css';
import './Home.css';
import { NavLink} from 'react-router-dom'


class SignIn extends Component {
  render() {

   
   
    return (
      <div  className= "myTrips primaryFont"
      >
          <NavLink className = "noDeco"
to={`/sign-in`}
>
<span className = "signIn white"
>my account</span></NavLink>

        </div>
    );
  }
}
export default SignIn;


