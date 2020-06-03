import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ServingQuant extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const quant = this.props.quant

    return (
      <div>
          {quant}
      </div>
     
          
   )}
  
}
  

export default ServingQuant