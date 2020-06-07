import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class Quant extends Component {

  static defaultProps = {
    input:  "adjust serving",
    result: 1
  }


  
  render() {

    const result = this.props.result
   
    return (
      <p className="tableAdjust dataResult blackBackground white">
      {result.toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
    </p>
   
   )}

}
  

export default Quant