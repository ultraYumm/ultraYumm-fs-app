import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class ServQuantHeader extends Component {
  

 

  render() {

    return (
        
        <th className= "servingH" id= "serving quantity header">
           <span className="hidden">Quantity</span>
        <i className= "fas fa-coins" alt= "serving quantity header"></i>
      </th>
    )
}
}

export default ServQuantHeader