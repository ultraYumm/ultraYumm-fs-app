import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ItemName extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const item = this.props.item 
 const name = item.food_name
 

    return (
      <div>
           {name}
      </div>
          
   )}
  
}
  

export default ItemName