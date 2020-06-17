import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';

class BackButton extends Component {

  
  render() {

    function goBack() {
        window.history.back();
      }
    return (
      
      <i className ="fas fa-arrow-circle-left skin back arrowButtons"
          onClick={() => goBack()}>
           

           
            </i>
     
    )
 }  
}
  

export default BackButton