import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import "../FormElements/FormElements.css";


class Privacy extends Component {

 
  render() {

    return (
      <div className= "home">
      <h1 className= "black montebello title">Policies</h1>
      <ul className= "primaryFont black greetings">
        <li>
          <a href="https://app.termly.io/document/privacy-policy/f83a3a02-644a-4fa0-bd68-0067d7053a4c" alt= "privacy" className= "noDeco goTo" target= "_blank" >Privacy</a></li>

        <li>
          <a href="https://app.termly.io/document/terms-and-conditions/ad22332b-08eb-450d-8f60-bbb433b375c6" alt= "Terms and Conditions" className= "noDeco goTo" target= "_blank" >Terms and Conditions</a></li>
          <li>
          <a href="https://app.termly.io/document/disclaimer/d832c07f-8577-46c5-86a8-a8f26e8a8fe2" alt= "Disclaimer" className= "noDeco goTo" target= "_blank" >Disclaimer</a></li>
          <li>
         
          <a href="https://app.termly.io/document/cookie-policy/6811f760-c1ba-4397-93f1-15dbb6a86306" alt= "Disclaimer" className= "noDeco goTo" target= "_blank" ><i className="fas fa-cookie"></i></a></li>
       
     

      </ul>
     </div>
      
    )
  }
}
export default Privacy;


 