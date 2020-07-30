import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import "../FormElements/FormElements.css";
import CoreValuesImg from "../Images/CoreValues.png";



class Privacy extends Component {

 
  render() {

    return (
      <div className= "home policies">
      <h1 className= "black montebello title">Policies</h1>
      <ul className= "primaryFont black greetings">
      <img  src={CoreValuesImg} alt="ultraYumm core values" className= "coreValues"/>
      <li className = "hello">
      My name is Stephanie and I coded ultraYumm<span className ="tiny">©</span> after planning a Grand Canyon backpacking trip with my family along the wondrous <a href="https://www.grandcanyontrust.org/hikes/escalante-route" className = "noDeco" alt="url to escalante" target= "_blank" rel="noopener noreferrer">Escalante&nbsp;</a>route. It seemed like there were no good tools to search for foods and plan by weight constraints and calorie requirements. Fast forward, you are now visiting site version 1.0! <br></br> <br></br>
      Full disclosure, this is a prototype, homemade with love, that I'm working on in my spare time. I also still have much to learn about web development. Please send me your  <a href="mailto:mailto:ultrayummprod@gmail.com?subject= Please share your feedback, questions, anything!" className = "noDeco" alt="subject" target= "_blank" rel="noopener noreferrer" >comments&nbsp;</a>or post a review on <span>
      <a href="https://www.facebook.com/ultraYumm" className = "noDeco" alt="subject" target= "_blank" rel="noopener noreferrer"> <i className="fab fa-facebook" alt= "facebook page" title="Email your feedback"></i></a>
</span> thank you!
        </li>   

        <li>
          <a href="https://app.termly.io/document/privacy-policy/f83a3a02-644a-4fa0-bd68-0067d7053a4c" alt= "privacy" className= "noDeco goTo" target= "_blank" rel="noopener noreferrer">Privacy</a></li>

        <li>
          <a href="https://app.termly.io/document/terms-and-conditions/ad22332b-08eb-450d-8f60-bbb433b375c6" alt= "Terms and Conditions" className= "noDeco goTo" target= "_blank" rel="noopener noreferrer">Terms and Conditions</a></li>
          <li>
          <a href="https://app.termly.io/document/disclaimer/d832c07f-8577-46c5-86a8-a8f26e8a8fe2" alt= "Disclaimer" className= "noDeco goTo" target= "_blank" rel="noopener noreferrer">Disclaimer</a></li>
          <li>
         
          <a href="https://app.termly.io/document/cookie-policy/6811f760-c1ba-4397-93f1-15dbb6a86306" alt= "Disclaimer" className= "noDeco goTo" target= "_blank" rel="noopener noreferrer"><i className="fas fa-cookie"></i></a></li>
      
      </ul>
     </div>
      
    )
  }
}


export default Privacy;