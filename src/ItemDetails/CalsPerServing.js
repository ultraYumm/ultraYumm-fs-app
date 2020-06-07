import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import Quant from "../CustomItem/Quant";



class CalsPerServing extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const calories = this.props.calories
 const result = this.props.result
 

    return (
        <td className="caloriesH tooltip cal calS">
         {calories}
         <span className="tooltiptext">cal per serving</span>
         <Quant
          result = {result}/>
       </td>
   )}
  
}
  

export default CalsPerServing