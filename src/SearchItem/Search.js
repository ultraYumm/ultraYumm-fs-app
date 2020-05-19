import React, { Component } from 'react';
import './Search.css';
import '../Font/Font.css';
import uYtitle from '../Images/uYtitle.png';
import SearchForm from './SearchForm';


class Search extends Component {
  render() {
    return (

    <div >
        
        <img className= "uYtitle" src={uYtitle} alt= "ultraYumm logo"/>
       
        <div  className= "hero black montebello">Get more energy!<span>&nbsp;&nbsp;</span><span className= "lighter">pack lighter</span></div> 
        <SearchForm></SearchForm>
   
    </div>
   
   );
  }
}
export default Search;