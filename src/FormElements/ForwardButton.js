import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class ForwardButton extends Component {

  
  render() {

    function goForward() {
        window.history.forward();
      }
    return (
      
          <button
          onClick={() => goForward()}
            className= "white primaryFont forward"
            type = "button">
            forward...
          </button>
     
    )
 }  
}
  

export default ForwardButton