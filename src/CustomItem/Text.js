import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';



class Text extends Component {

  static defaultProps = {
    input:  "",
  }

  
  render() {
     
    const input = this.props.input
   
    return (
       
        <input type="text" 
        //value = {input}
        placeholder = {input}/>
        
   )}
  
}

export default Text