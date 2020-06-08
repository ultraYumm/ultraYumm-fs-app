import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import CalResult from "../CustomItem/WeightResult";



class CalsPerServing extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        calories: 0,
      }
     
  render() {
      
 const calories = this.props.calories
 const result = this.props.result
 

    return (
        <td className="weightH tooltip gram">
         {calories}
         <span className="tooltiptext">cal per serving</span>
         <CalResult
         result = {result}/>
       </td>
   )}
  
}
  

export default CalsPerServing