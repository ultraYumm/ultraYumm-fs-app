import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import BrandHeader from "../Tables/BrandHeader";



class NewItemBrand extends Component {

  static defaultProps = {
    brand: "Trader Go"
  }


  
  render() {


    const brand = this.props.brand

    const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value
   
      setter(input);
      this.props.handleAdjustBrand(input)

      }
      
   
    return (

     
        <label htmlFor= "custom-brand-name" className= "labelWidth white"><i class="fas fa-tag white"></i>Brand
        <input 
        type="text" 
        name="brandName" 
        className="skinBackground blakc search" id= "custom-brand-name"
        defaultValue= {brand}
        onChange = {buildHandleKeyUp((value) => {
          this.setState(
            {brand_name: value
            }
                
            )   
          })}
        />
        </label>
   )}

}
  

export default NewItemBrand