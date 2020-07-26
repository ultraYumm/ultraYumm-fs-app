import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class TotalCalHeader extends Component {
  

 

  render() {

    return (
        
        <th className="caloriesH cal calS" id= "total calories header">
               <span className="hidden">Total calories&nbsp;</span>
          <i className ="fas fa-fire-alt" alt= "total calories header"></i>&nbsp;calories</th>
    )
}
}

export default TotalCalHeader