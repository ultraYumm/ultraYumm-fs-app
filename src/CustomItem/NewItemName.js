import React, { Component } from "react";
import "../Font/Font.css";
import "../FormElements/FormElements.css";
import { renderToString } from 'react-dom/server';
import { v4 as uuidv4 } from 'uuid';

class NewItemName extends Component {

  static defaultProps = {
    name:  "Pink salt",
    id: ""
  }

  
  


  render() {

    

    const name = this.props.name;
    const existingId = this.props.id

    const id  = () => {
      if (existingId === "")
      {var newId = uuidv4()
      return newId} 
      return existingId
      }


    
    const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value
   
      setter(input, id());
      this.props.handleAdjustName(input, id())

      }


    return (
     
        <label htmlFor="custom-item-name">
          <span className="labelWidth white">Item name</span>
          <input
            type="text"
            name="itemName"
            className="redBackground white search"
            id="custom-item-name"
            defaultValue= {name} required

            onKeyUp = {buildHandleKeyUp((value) => {
              this.setState(
                {food_name: value
                }
                
              )   
            })}


          />
        </label>
   
    );
  }
}

export default NewItemName;
