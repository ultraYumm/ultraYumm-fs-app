import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ServingUnit extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const item = this.props.item
 const source = item.photo.thumb

    return (
      <img
      className="tableImage"
      src = {source}
      alt="Item"/>
          
   )}
  
}
  

export default ServingUnit