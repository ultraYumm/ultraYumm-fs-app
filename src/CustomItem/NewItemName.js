import React, { Component } from "react";
import "../Font/Font.css";
import "../FormElements/FormElements.css";
import { renderToString } from 'react-dom/server';

class NewItemName extends Component {

  static defaultProps = {
    name:  "Pink salt",
  }
  
  render() {
    
    
    const name = this.props.name;

    return (
      <label htmlFor="custom-item-name">
        <span className="labelWidth white">Item name</span>
        <input
          type="text"
          name="customItemName"
          className="redBackground white search"
          id="custom-item-name"
          placeholder= {name}
    
        />
      </label>
    );
  }
}

export default NewItemName;
