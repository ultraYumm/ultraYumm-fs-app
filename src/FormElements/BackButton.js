import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class BackButton extends Component {

  
  render() {

    function goBack() {
        window.history.back();
      }
    return (
      
          <button
          onClick={() => goBack()}
            className= "white primaryFont back sticky"
            type = "button">
            ...back
          </button>
     
    )
 }  
}
  

export default BackButton