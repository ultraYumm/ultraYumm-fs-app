import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import TotalCalories from "../ItemDetails/TotalCalories";

class ItemHeader extends Component {
  

 

  render() {

    return (
        
  
        <th className="itemH">
        Item<span className="mobile">(Click)</span>
        </th>
    )
}
}

export default ItemHeader

