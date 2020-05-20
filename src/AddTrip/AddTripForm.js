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
                <label for= "new-trip-name"><span className= "labelWidth">New trip Name</span>
                    <input type="text" name="newTripName" class="salmonBackground white search" id= "new-trip-name" placeholder="Escalante" required/>
                </label>
            </p>

            <p>
                <label for= "start-date"><span className= "labelWidth">Start date</span>
                <input type="date" name="startDate" id= "start-date"/> </label> <br></br>
                <label for= "end-date"><span className= "labelWidth">End date</span>
                <input type="date" name="endDate" id= "end-date"/> </label>            
            </p>

            <p>
                 <label for = "traveler-name"><span className= "labelWidth">  Traveler Names</span>
                 <input type="text" name="name-traveler" className= "mauveBackground white names" placeholder = "Stef, Jack, Emi, Marielle..." id= "traveler-name"/>  
                </label>
            </p>

          <GoButton></GoButton>
        </form>
        
   )}
  
}
  

export default AddTripForm