import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class NewItemBrand extends Component {

  static defaultProps = {
    brand: "common"
  }


  constructor(props) {
    super(props);
    const brand = this.props.brand

    this.state = {
      brand_name: brand
    };
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

     <div>
        <label htmlFor= "custom-brand-name" className= "labelWidth white"><i className ="fas fa-tag white"></i>Brand </label>
          <input 
          type="text" 
          name="brandName" 
          className="skinBackground black search" id= "custom-brand-name"
          defaultValue= {brand}
          onChange = {buildHandleKeyUp((value) => {
            this.setState(
              {brand_name: value}

              )   
            })}
          />
        </div>
   )}

}
  

export default NewItemBrand