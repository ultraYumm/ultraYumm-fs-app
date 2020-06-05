import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import ItemImage from "../ItemDetails/ItemImage";




class TableItemImage extends Component {

  static defaultProps = {
     item:  {DEFAULTITEM},
     image: ""
    
  };
     
  render() {
      
 const image = this.props.image
 

    return (
        <td className="imageH tableAdjust">
      <ItemImage
      className="tableImage tableAdjust"
      image = {image}
      alt="Item"/>
       </td>
          
   )}
  
}
  

export default TableItemImage