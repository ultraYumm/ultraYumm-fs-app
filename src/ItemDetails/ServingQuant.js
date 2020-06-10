import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import "../Tables/Tables.css";
import UnitQuant from '../CustomItem/UnitQuant';




class ServingQuant extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        input: 1
      }
     
  render() {
      
    const input = this.props.input

   
    return (
        <td className="servingH black">
          {!input? "" : input}
         
      
        </td>
     
          
   )}
  
}
  

export default ServingQuant

/*
<UnitQuant
input = {input}
handleAdjustQuant = {this.props.handleAdjustQuant}/>*/