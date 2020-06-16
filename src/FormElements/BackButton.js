import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class BackButton extends Component {

  
  render() {

    function goBack() {
        window.history.back();
      }
    return (
      
      <i className ="fas fa-backward white"
          onClick={() => goBack()}
           
            type = "button">
           
            </i>
     
    )
 }  
}
  

export default BackButton