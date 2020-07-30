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
      My name is Stephanie and I coded this site after planning a Grand Canyon backpacking trip with my 2 girls and husband in 2019, the wondrous <a href="https://www.google.com/maps/embed?pb=!4v1589308620339!6m8!1m7!1sH9R4rDjmbhhsQVA2f0Dq8Q!2m2!1d36.03291467946964!2d-111.8531019810478!3f9.17!4f0!5f0.7820865974627469" className = "noDeco" alt="url to escalante">Escalante&nbsp;</a>. It seemed like there were no good tools out there to search for foods and plan specifically according to weight and calories. So now you are visiting site version 1.0! <br></br> <br></br>
      Full disclosure, this is a homemade prototype that I'm working on in my spare time. I still have much to learn about web development. Please send me your  <a href="mailto:mailto:ultrayummprod@gmail.com?subject= Please share your feedback, questions, anything!" className = "noDeco" alt="subject">comments&nbsp;</a>or post a review on <span>
      <a href="https://www.facebook.com/ultraYumm" className = "noDeco" alt="subject"> <i className="fab fa-facebook" alt= "facebook page" title="Email your feedback"></i></a>
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