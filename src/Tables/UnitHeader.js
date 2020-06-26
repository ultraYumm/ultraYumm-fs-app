import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class WeightGHeader extends Component {
  

 

  render() {

    return (
        
      <th className="unitH" id= "unit ie tablespoon or cup header">
        <span className="hidden">Serving unit</span>
        <i className ="fas fa-ruler-vertical"  alt= "unit ie tablespoon or cup header"></i></th>
    )
}
}

export default WeightGHeader