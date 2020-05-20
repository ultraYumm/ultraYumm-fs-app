import React, { Component } from 'react';
import './AddTrip.css';
import '../Font/Font.css';
import GoButton from '../FormElements/GoButton';
import '../FormElements/FormElements.css';



class AddTripForm extends Component {

  
  render() {
    
    const onSubmitForm = () => {
      
    }
  

       
   
    return (
        <form onSubmit={onSubmitForm}>
         <h2>Plan a trip!</h2>
            <p>
                <label htmlFor= "new-trip-name"><span className= "labelWidth">New trip Name</span>
                    <input type="text" name="newTripName" className="salmonBackground white search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </p>

            <p>
                <label htmlFor= "start-date"><span className= "labelWidth">Start date</span>
                <input type="date" name="startDate" id= "start-date"/> </label> <br></br>
                <label htmlFor= "end-date"><span className= "labelWidth">End date</span>
                <input type="date" name="endDate" id= "end-date"/> </label>            
            </p>

            <p>
                 <label htmlFor= "traveler-name"><span className= "labelWidth">  Traveler Names</span>
                 <input type="text" name="traveler-name" className= "mauveBackground white names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </p>

            <p>
                 <label htmlFor= "map-link"><span className= "labelWidth"><a href= "google.com/maps" target= "_blank">Link</a></span>
                 <input type="url" name="map-link" className= "mauveBackground white names" placeholder = "https://www.google.com/maps/embed?pb=!4v1589308620339!6m8!1m7!1sH9R4rDjmbhhsQVA2f0Dq8Q!2m2!1d36.03291467946964!2d-111.8531019810478!3f9.17!4f0!5f0.7820865974627469" id= "map-link"/>  
                </label>
            </p>


          <GoButton></GoButton>
        </form>
        
   )}
  
}
  

export default AddTripForm