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

    function onlyOne(checkbox) {
      const checkboxes =  document.getElementsByName('check')
        checkboxes.forEach((item) => {
            if (item !== checkbox) item.checked = false
          
        })
    }


    return (
        <td className="delete">
        {" "}
        <input type = "checkbox"
         name= "check"
         onClick={() => {
          onlyOne(this)
          const selectedId = id
          this.props.idToDelete(selectedId)
        }}
        />
        <span class="tooltiptext">click Go! to confirm {id} delete</span></td>
      
          
   )}
  
}
  

export default Delete

//className= {(!this.state.id? "checked" : "notChecked")}