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

      constructor(props) {
        super(props);
        this.state = {
          quant: 1,
          
        };
      }
    

  adjustQuant = (input) => {
    
    this.setState({
      quant: input,    
    
    });
  };



     
  render() {
      
 const quant = this.props.quant

    return (
        <td className="servingH">
          {quant}
          <p className="tableAdjust">
            <Quant
            handleAdjustQuant = {(input) =>
              this.adjustQuant(input)
            }
            
            />
            </p>
        </td>
     
          
   )}
  
}
  

export default ServingQuant