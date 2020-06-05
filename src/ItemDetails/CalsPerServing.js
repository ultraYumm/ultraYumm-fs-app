import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class CalsPerServing extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const calories = this.props.calories
 

    return (
        <td className="caloriesH tooltip cal calS">
         {calories}
         <span className="tooltiptext">cal per serving</span>
                    <p className="tableAdjust dataResult blackBackground white">
                      100
                    </p>
       </td>
   )}
  
}
  

export default CalsPerServing