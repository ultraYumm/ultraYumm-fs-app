import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class DeleteHeader extends Component {
  

 

  render() {

    return (
        
        <th className="deleteH" id= "delete header headDelete">
          <span className="hidden">Delete</span>
          <i className ="fas fa-trash-alt" alt= "delete header"></i></th>    )
}
}

export default DeleteHeader