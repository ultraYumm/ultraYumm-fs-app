import React, { Component } from 'react';
import './AddTrip.css';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';
import { NavLink} from 'react-router-dom'


class AddTripForm extends Component {

  
  render() {
    
    const onSubmitForm = () => {
      
    }
  

       
   
    return (
        <form onSubmit={onSubmitForm}>
         <h2 className = "white">Plan a trip!</h2>
            <p>
                <label htmlFor= "new-trip-name"><span className= "labelWidth white">New trip name</span>
                    <input type="text" name="newTripName" className="redBackground white search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </p>

            <p>
                <label htmlFor= "start-date"><span className= "labelWidth white">Start date</span>
                <input type="date" name="startDate" id= "start-date"/> </label> <br></br>
                <label htmlFor= "end-date"><span className= "labelWidth white">End date</span>
                <input type="date" name="endDate" id= "end-date"/> </label>            
            </p>

            <p>
                 <label htmlFor= "traveler-name"><span className= "labelWidth white">Traveler names</span>
                 <input type="text" name="traveler-name" className= "redBackground white names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </p>

            <p>
                 <label htmlFor= "map-link"><span className= "labelWidth white"><a href= "https://www.google.com/maps" target= "_blank"  className= "white">Location URL</a></span>
                 <input type="url" name="map-link" className= "redBackground white names" placeholder = "https://www.google.com/maps/embed?pb=!4v1589308620339!6m8!1m7!1sH9R4rDjmbhhsQVA2f0Dq8Q!2m2!1d36.03291467946964!2d-111.8531019810478!3f9.17!4f0!5f0.7820865974627469" id= "map-link"/>  
                </label>
            </p>


          
            <NavLink to={`/my-trips`}>
            <GoButton/>
            </NavLink>  
        </form>
        
   )}
  
}
  

export default AddTripForm