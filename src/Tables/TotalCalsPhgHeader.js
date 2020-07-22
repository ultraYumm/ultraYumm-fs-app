import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class TotalCalsPhgHeader extends Component {
  

 

  render() {

    return (
        
        <th className="caloriesH" id= "total calories per 100grams header">
          <i className ="fab fa-superpowers" alt= "total calories per 100grams header"></i>&nbsp;calories/<br></br>100grams</th>
    )
}
}

export default TotalCalsPhgHeader