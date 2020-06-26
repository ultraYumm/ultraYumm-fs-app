import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class TotalCalsPhgHeader extends Component {
  

 

  render() {

    return (
        
        <th className="caloriesH" id= "total calories per 100grams header">
            <span className="hidden">Total calories per 100 grams</span>
          <i className ="fab fa-superpowers super" alt= "total calories per 100grams header"></i></th>
    )
}
}

export default TotalCalsPhgHeader