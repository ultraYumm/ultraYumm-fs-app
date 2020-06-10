import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class WeightResult extends Component {

    static defaultProps = {
        result: 1
      }
     
  render() {
      
 const result = this.props.result
 

    return (
           <p className="dataResult black">
                    {isNaN(result)? 1 : (result)}
                  </p>
          )}
  
}
  

export default WeightResult