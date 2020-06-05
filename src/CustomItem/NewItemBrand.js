import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class NewItemBrand extends Component {

  static defaultProps = {
    brand: "Trader Go"
  }

  
  render() {

    const brand = this.props.brand
      
   
    return (
       
        <label htmlFor= "custom-brand-name"><span className= "labelWidth white">Brand</span>
        <input type="text" name="customBrandName" className="redBackground white search" id= "custom-brand-name"
        //value = {brand}
        placeholder= {brand} required/>
        </label>
        
   )}
  
}
  

export default NewItemBrand