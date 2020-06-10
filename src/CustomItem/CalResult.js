import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class CalResult extends Component {

    static defaultProps = {
        result: 1
      }
     
  render() {
      
 const result = this.props.result
 console.log(result)

 const alt = 300

 

    return (
           <p className="tableAdjust dataResult sinkBackground black">
                    {result}
                  </p>
          )}
  
}
  

export default CalResult