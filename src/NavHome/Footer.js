import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import NutritionixAPI from '../Images/NutritionixAPI.png';
import { NavLink} from 'react-router-dom';



class Footer extends Component {


  render() {

    

    
    return (
        <footer>
        <ul className= "social">

            <li className= "social_icon email"> <a href="mailto:mailto:ultrayummprod@gmail.com?subject= Please share your feedback, questions, anything!" className = "noDeco" alt="subject"> <i className="fas fa-at social contact_icon black" alt= "Email" title="Email your feedback"></i></a>
            </li> 

            <li className= "social_icon email">
            <NavLink
          to={`/policies`}
          className = "noDeco">
            
         <i className="fas fa-info-circle black social contact_icon"></i><span className = "invisible">policies</span>
            </NavLink> 
            </li>
    
            <li className= "social_icon"> <a href= "https://www.nutritionix.com" target= "_blank" rel="noopener noreferrer"> 
              <img className="attribution" src= {NutritionixAPI} alt="Nutritionix"/></a></li> 

      </ul>
    </footer>
      
    );
  }
}
export default Footer;