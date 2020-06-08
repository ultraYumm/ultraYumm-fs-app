import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ServingUnit extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        unit: null
      }
     
  render() {
      
 const unit = this.props.unit
 

    return (
        <td className="unitH">
          {!unit? "custom" : unit}
          </td>
   )}
  
}
  

export default ServingUnit