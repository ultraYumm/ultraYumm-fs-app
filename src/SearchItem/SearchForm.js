import React, { Component } from 'react';
import './SearchForm.css';
import '../Font/Font.css';
import uYtitle from '../Images/uYtitle.png';
import SearchBar from './SearchBar';


class SearchForm extends Component {
  render() {
    return (

    <div >
        
        <img className= "uYtitle" src={uYtitle} alt= "ultraYumm logo"/>
       
        <div  className= "hero black montebello">Get more energy!<span>&nbsp;&nbsp;</span><span class= "lighter">pack lighter</span></div>
       
       
        <SearchBar></SearchBar>
   
    </div>
   
   );
  }
}
export default SearchForm;