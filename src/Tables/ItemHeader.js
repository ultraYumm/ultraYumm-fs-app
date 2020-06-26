import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';



class ItemHeader extends Component {
  

 

  render() {

    return (
        
  
        <th className="itemH" id= "item name header">
               <span className="hidden">Name</span>
        <i className ="fas fa-carrot" alt= "item name header"></i>
        </th>
    )
}
}

export default ItemHeader

