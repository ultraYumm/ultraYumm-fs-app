import React, { Component } from 'react';
import '.../Font/Font.css';
import '.../FormElements/FormElements.css';



class TotalCalories
 extends Component {

  
  render() {
      
   
    return (
       
        <div className= "itemDetails">
            
            <label className= "detailLabel">Total Calories</label>
            
            <input className="number" class = "result detailInput" min="0" value = "300"/>

        </div>

        
   )}
  
}
  

export default TotalCalories