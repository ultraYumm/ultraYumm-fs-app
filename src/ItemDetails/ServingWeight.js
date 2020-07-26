import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";


class ServingWeight extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        weight: 0,
        result: 1
      }
     
  render() {
      
 const weight = this.props.weight


    return (
        <td className="weightH  gram" headers = "weight in grams header">
         {weight}       
     </td>
   )}
  
}
  

export default ServingWeight

