import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class CalResult extends Component {

    static defaultProps = {
        result: 0
      }
     
  render() {
      
 const result = this.props.result.toFixed(0)
 .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
 

    return (
           <p className="tableAdjust dataResult sinkBackground blue">
                    {result}
                  </p>
          )}
  
}
  

export default CalResult