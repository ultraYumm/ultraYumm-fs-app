import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class CalsPerHg extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const calsPHg = this.props.calsPHg


    return (
    <div>
        {calsPHg}
    </div>
          
   )}
  
}
  

export default CalsPerHg