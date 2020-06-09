import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class NewItemBrand extends Component {

  static defaultProps = {
    brand: "Trader Go"
  }

  
  render() {

    const onSubmitForm = (e) => {
      e.preventDefault() 
      const unit =  e.target.brandName.value
      this.props.handleAdjustBrand(unit)
    }

    const brand = this.props.brand
      
   
    return (

      <form className= "noDeco" onSubmit={onSubmitForm}>
        <label htmlFor= "custom-brand-name"><span className= "labelWidth white">Brand</span>
        <input type="text" name="brandName" className="redBackground white search" id= "custom-brand-name"
          placeholder= {brand} required/>
        </label>
        </form>
        
   )}
  
}
  

export default NewItemBrand