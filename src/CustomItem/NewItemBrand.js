import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



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

     
        <label htmlFor= "custom-brand-name"><span className= "labelWidth white">Brand</span>
        <input 
        type="text" 
        name="brandName" 
        className="redBackground white search" id= "custom-brand-name"
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