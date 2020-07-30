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
      <li>
      My name is Stephanie and I coded this site after planning a Grand Canyon backpacking trip with my 2 girls and husband in 2019 - the wondrous Escalante Route. It seemed like there were no good tools out there to search for foods and plan specifically according to weight and calories. So now you are visiting site version 1.0! The core values listed above are what I deeply believe in, and my goal is to make a useful product for the outdoor recreation community. I am 100% self funded a do everything myself. At some point I may try to offset my costs through an affiliate prFull disclosure, this is a homemade prototype that I'm working on in my spare time and I still have much to learn about web development. Please send me your  <a href="mailto:mailto:ultrayummprod@gmail.com?subject= Please share your feedback, questions, anything!" className = "noDeco" alt="subject">comments</a>or post a review.
        
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