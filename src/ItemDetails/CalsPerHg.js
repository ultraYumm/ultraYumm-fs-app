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
        <td className="caloriesH  calG">
        {calsPHg}
        </td>
          
   )}
  
}
  

export default CalsPerHg