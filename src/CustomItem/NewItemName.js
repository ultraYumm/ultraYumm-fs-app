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
    const id = this.props.id
    
    const onSubmitForm = (e) => {
      e.preventDefault() 
      const unit =  e.target.itemName.value
      this.props.handleAdjustName(unit, id)
    }
    
    

    return (
      <form className= "noDeco" onSubmit={onSubmitForm}>
        <label htmlFor="custom-item-name">
          <span className="labelWidth white">Item name</span>
          <input
            type="text"
            name="itemName"
            className="redBackground white search"
            id="custom-item-name"
            placeholder= {name} required
          />
        </label>
      </form>
    );
  }
}

export default NewItemName;
