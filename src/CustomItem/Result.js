import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";




class Result extends Component {

    static defaultProps = {       
        result: 1,
       
      }
     
  render() {
      
 const result  = this.props.result
 const formatedResult = result.toFixed(0)
 .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
 const placeholder = () => {
    const num = this.props.placeholder
    const formatedNum = num.toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    
    if (isNaN(num)) {
        return 1
    }

    return formatedNum}


    return (
           <div className="white dataResult total bold">
                   {isNaN(result)? placeholder() : (formatedResult)}
                  </div>
          )}
  
}
  

export default Result