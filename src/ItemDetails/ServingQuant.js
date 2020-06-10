import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import "../Tables/Tables.css";
import unitQuant from '../CustomItem/UnitQuant';
import UnitQuant from '../CustomItem/UnitQuant';




class ServingQuant extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        input: 1
      }
     
  render() {
      
    const input = this.props.input

   /*const buildHandleKeyUp = setter => (e) => {
     
      e.preventDefault() 
      const input = e.currentTarget.value 
      setter(input);
      this.props.handleAdjustQuant(input)

      }*/
    return (
        <td className="servingH black">
          {!input? "" : input}
          <UnitQuant
          input = {input}
          handleAdjustQuant = {this.props.handleAdjustQuant}/>
      
        </td>
     
          
   )}
  
}
  

export default ServingQuant