import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import './TripNav.css';



class TripNav extends Component {

  
  render() {
    


       
   
    return (
        <section className = "tripSection">
         <h2 className= "montebello">My trips!</h2>
            <ul className= "trips">
              <li className= "trips tripLi"><iframe className= "tripImage" src="https://www.google.com/maps/embed?pb=!4v1589308620339!6m8!1m7!1sH9R4rDjmbhhsQVA2f0Dq8Q!2m2!1d36.03291467946964!2d-111.8531019810478!3f9.17!4f0!5f0.7820865974627469">
                </iframe>
                <p className = "trip primaryFont purple">Escalante </p></li>       

              <li className= "tripLi"><iframe className= "tripImage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6991.493885443003!2d83.8670621985494!3d28.81661413001174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39be1420f935fa2f%3A0xb6f4363b17b0a97f!2sShree%20Muktinath%20Temple%2C%20Nepal!5e0!3m2!1sen!2sus!4v1589311708705!5m2!1sen!2sus" ></iframe>
              <p className = "trip primaryFont purple">Muktinath </p></li>

              <li className = "tripLi"><iframe class = "tripImage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366762.0812983096!2d7.270349863379504!3d44.09720792783267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd9c413ae99b5b%3A0x40819a5fd9795c0!2s06430%20Tende%2C%20France!5e0!3m2!1sen!2sus!4v1589313081562!5m2!1sen!2sus" ></iframe>
              <p className = "trip primaryFont purple">Tende</p>
              </li>
             </ul>
        </section>
        
   )}
  
}
  

export default TripNav