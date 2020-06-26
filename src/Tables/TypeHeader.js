import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class TypeHeader extends Component {
  

 

  render() {

    return (
        
        <th className="type"  id= "item type (ie breakfast) header">
           <span className="hidden">Type</span>
          <i className ="fas fa-utensils" alt= "item type (ie breakfast) header"></i></th>
    )
}
}

export default TypeHeader