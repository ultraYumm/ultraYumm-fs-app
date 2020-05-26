import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class NewItemBrand extends Component {

  
  render() {
      
   
    return (
       
        <label htmlFor= "custom-brand-name"><span className= "labelWidth">Brand</span>
        <input type="text" name="customBrandName" className="salmonBackground white search" id= "custom-brand-name" placeholder="Trader Go" required/>
        </label>
        
   )}
  
}
  

export default NewItemBrand