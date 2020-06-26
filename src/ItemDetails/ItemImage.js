import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class ItemImage extends Component {

  static defaultProps = {
     item:  {DEFAULTITEM},
     image: "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
    
  };
     
  render() {
      
 const image = this.props.image
 const source = image

    return (
    
      <img
      className="tableImage "
      src = {source}
      alt="Item"/>
          
   )}
  
}
  

export default ItemImage