import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';



class BrandHeader extends Component {
  

 

  render() {

    return (
        
        <th className="brandH" id= "brand header">
            <span className="hidden">Brand</span>
          <i className ="fas fa-tag" alt= "brand header"></i></th>
    )
}
}

export default BrandHeader
