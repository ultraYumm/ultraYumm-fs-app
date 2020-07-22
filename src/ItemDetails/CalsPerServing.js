import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";

class Cals_per_serving extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        calories: 0,
        result: 0,
      }
     
  render() {
      
 const calories = this.props.calories
 

    return (
        <td className="weightH gram">
         {calories}
       </td>
   )}
  
}
  

export default Cals_per_serving
