import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class Delete extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }

      
      


     
  render() {
      
    const id = this.props.id
    const name = this.props.name


    return (
        <td className="delete">
        {" "}
        <input
         type= "radio"
         className = "delete"
         name= "check"
         onClick={() => {
          //onlyOne(this)
          this.props.idToDelete(id, name)
        }}
        />
        <span class="tooltiptext">click Delete to confirm </span></td>
      
          
   )}
  
}
  

export default Delete

//className= {(!this.state.id? "checked" : "notChecked")}