import React, { Component } from 'react';
import '../Font/Font.css';
import './Home.css';
import { NavLink} from 'react-router-dom'


class SignIn extends Component {
  render() {

   
   
    return (
      <div  className= "myTrips montebello"
      >
          <NavLink className = "noDeco"
to={`/sign-in`}
>
<span className = "myTrips white"
>{this.props.myAccountText}</span></NavLink>

        </div>
    );
  }
}
export default SignIn;

