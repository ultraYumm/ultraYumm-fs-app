import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";




class ItemImage extends Component {

  static defaultProps = {
    item: [
      {photo: {
      thumb: "https://nix-tag-images.s3.amazonaws.com/3839_thumb.jpg"}},
      ]
  };
     
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
  

export default ItemImage