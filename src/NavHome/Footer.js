import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import NutritionixAPI from '../Images/NutritionixAPI.png';



class Footer extends Component {


  render() {

    

    
    return (
        <footer>
        <ul className= "social">

            <li className= "social social_icon"> <a href="mailto:mailto:ultrayummprod@gmail.com?subject=Likes, dislikes, questions, a limerick...anything!" className = "noDeco" alt="subject"> <i className="fas fa-at social contact_icon black" alt= "Email" title="Email your feedback"></i></a>
            </li> 
    
            <li> <a href= "https://www.nutritionix.com" target= "_blank" rel="noopener noreferrer"> 
              <img className="attribution" src= {NutritionixAPI} alt="Nutritionix"/></a></li> 

      </ul>
    </footer>
      
    );
  }
}
export default Footer;