import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";

class ItemName extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        name: ""
      }
     
  render() {
      
 const name = this.props.name
 
    return (
      <div>
       {name} 
      </div>
          
   )}
  
}
  

export default ItemName

