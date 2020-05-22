import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class NewItemName extends Component {

  
  render() {
      
   
    return (
       
        <label htmlFor= "custom-item-name"><span className= "labelWidth">Item name</span>
        <input type="text" name="customItemName" className="salmonBackground white search" id= "custom-item-name" placeholder="Spicy Mango" required/>
        </label>
     
           
        
   )}
  
}
  

export default NewItemName