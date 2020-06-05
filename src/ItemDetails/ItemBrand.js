import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ItemBrand extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        brand: ""
      }
     
  render() {
  const brand = this.props.brand     

 

    return (
      <td className="brandId">
          {brand}
          </td>
          
   )}
  
}
  

export default ItemBrand