import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class CalsPerServing extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const calsPs = this.props.calsPs
 

    return (
     <div>
         {calsPs}
     </div>
          
   )}
  
}
  

export default CalsPerServing