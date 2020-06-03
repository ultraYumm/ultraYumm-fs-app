import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";



class ServingWeight extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 const weight = this.props.weight
 

    return (
      <div>
          {weight}

      </div>
   )}
  
}
  

export default ServingWeight