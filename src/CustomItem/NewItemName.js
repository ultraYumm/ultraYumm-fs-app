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
   
    


    
    const buildHandleKeyUp = setter => (e) => {

    const name = this.props.name;
    const existingId = this.props.id



     
      e.preventDefault() 
      const input = e.currentTarget.value
      console.log(input)
      console.log(name)
      const newId = uuidv4()

    const id  = () => {
      if (name === input)
      {return existingId}
      return newId
      }

      console.log(id())


     
       setter(input, id())
      
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
            

            onClick = {buildHandleKeyUp((value) => {
      
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
