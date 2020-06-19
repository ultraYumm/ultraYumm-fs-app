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
 const result = this.props.result
 

    return (
        <td className="weightH  gram">
         {weight} total gms       
                  </td>
   )}
  
}
  

export default ServingWeight

/*<div className = "tableAdjust"><WeightResult
result = {result}
/></div>*/