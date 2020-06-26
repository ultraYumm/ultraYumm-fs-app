import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class TravlrHeader extends Component {
  

 

  render() {

    return (
        
        
        <th className="traveler" id= "traveler name header">
            <span className="hidden">Traveler name</span>
          <i className ="fas fa-user-circle"  alt= "traveler name header"></i></th>

    )
}
}

export default TravlrHeader