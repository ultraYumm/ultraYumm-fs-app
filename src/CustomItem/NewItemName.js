import React, { Component } from "react";
import "../Font/Font.css";
import "../FormElements/FormElements.css";
import { v4 as uuidv4 } from 'uuid';


class NewItemName extends Component {

  static defaultProps = {
    name:  "...my pink salt",
    id: ""
  }


  

  render() {

    

    const name = this.props.name;
    
    const buildHandleKeyUp = setter => (e) => {

     
      e.preventDefault() 
      const input = e.currentTarget.value
      const newId = uuidv4()

   
      setter(input, newId)
      
      this.props.handleAdjustName(input, newId)
     }

    


    return (
     <div>
        <label htmlFor="custom-item-name" className="labelWidth white"><i className ="fas fa-carrot white"></i>Item name
         </label>
          <input
            type="text"
            name="itemName"
            className="skinBackground black search"
            id="custom-item-name"
            defaultValue= {name} required
            

            onChange = {buildHandleKeyUp((value) => {
      
              this.setState(
                {food_name: value
                }
              )

            })}


          />
          </div>
       
   
    );
  }
}

export default NewItemName;
