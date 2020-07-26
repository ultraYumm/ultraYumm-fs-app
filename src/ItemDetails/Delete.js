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
        <div className= "delete lightBlue"
        onClick={() => {
          this.props.idToDelete(id, name)
         
        }}>click and confirm       
       
         </div>
        </td>
      
      
          
   )}
  
}
  

export default Delete

//className= {(!this.state.id? "checked" : "notChecked")}
/*<label className= "tooltiptext delete" htmlFor= "delete">click <strong>delete</strong> to confirm </label>*/
      