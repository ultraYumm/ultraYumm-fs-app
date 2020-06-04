import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class TotalCalories extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const calories = this.props.calories
 

    return (
      <div>
        {calories}

      </div>
          
   )}
  
}
  

export default TotalCalories