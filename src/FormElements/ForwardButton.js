import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class ForwardButton extends Component {

  
  render() {

    function goForward() {
        window.history.forward();
      }
    return (
      
      <i className ="fas fa-arrow-circle-right skin forward arrowButtons"
          onClick={() => goForward()}>
        
          </i>
     
    )
 }  
}
  

export default ForwardButton