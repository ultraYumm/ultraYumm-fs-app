import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ServingWeight extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        weight: 1
      }
     
  render() {
      
 const weight = this.props.weight
 

    return (
        <td className="weightH tooltip gram">
          {weight}
          <span className="tooltiptext">grams</span>
                    <p className="tableAdjust dataResult blackBackground white">
                      10
                    </p>
                  </td>
   )}
  
}
  

export default ServingWeight