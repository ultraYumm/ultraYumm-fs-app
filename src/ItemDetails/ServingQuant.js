import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import Quant from "../CustomItem/Quant";



class ServingQuant extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        quant: null
      }
     
  render() {
      
 const quant = this.props.quant

    return (
        <td className="servingH">
          {quant}
          <p className="tableAdjust">
            <Quant />
            </p>
        </td>
     
          
   )}
  
}
  

export default ServingQuant