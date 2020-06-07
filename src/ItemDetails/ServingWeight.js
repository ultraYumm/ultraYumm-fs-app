import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import Quant from "../CustomItem/Quant";



class ServingWeight extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        weight: 1
      }
     
  render() {
      
 const weight = this.props.weight
 const result = this.props.result
 

    return (
        <td className="weightH tooltip gram">
          {weight}
          <span className="tooltiptext">grams</span>
                    <Quant
                    result = {result}
                    />
                  </td>
   )}
  
}
  

export default ServingWeight