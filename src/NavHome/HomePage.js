import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import uYtitle from '../Images/uYtitle.png';
import SearchForm from '../Search/SearchForm';
import AddTripForm from '../AddTrip/AddTripForm';


class HomePage extends Component {
  render() {
    return (
    <div>
      <div className= "home">
        <img className= "uYtitle" src={uYtitle} alt= "ultraYumm logo"/>
        <h1  className= "black montebello">Get more energy!<span>&nbsp;&nbsp;</span><span className= "lighter">pack lighter</span></h1> 

       </div>
      
      <SearchForm></SearchForm>
            
      <AddTripForm></AddTripForm>
   </div>
   
   
   );
  }
}
export default HomePage;