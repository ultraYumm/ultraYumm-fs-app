import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class WeightGHeader extends Component {
  

 

  render() {

    return (
        
        <th className="weightH gram"  id= "weight in grams header">
             <span className="hidden">Serving weight&nbsp;</span>
          <i className ="fas fa-balance-scale" alt= "weight in grams header"></i>&nbsp;&nbsp;grams</th>
    )
}
}

export default WeightGHeader