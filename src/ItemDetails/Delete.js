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
      
 


    return (
        <td className="delete">
        {" "}
        <input type="checkbox" className="delete" />
      </td>
          
   )}
  
}
  

export default Delete