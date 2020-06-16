import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class ForwardButton extends Component {

  
  render() {

    function goForward() {
        window.history.forward();
      }
    return (
      
      <i className ="fas fa-forward white"
          onClick={() => goForward()}
            
            type = "button">
       
          </i>
     
    )
 }  
}
  

export default ForwardButton