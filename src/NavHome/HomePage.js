import React, { Component } from 'react';
import './Home.css';
import '../Font/Font.css';
import uYtitle from '../Images/uYtitle.png';
import SearchForm from '../Search/SearchForm';
import AddTripForm from '../AddTrip/AddTripForm';
import { NavLink} from 'react-router-dom'


class HomePage extends Component {
  render() {

    const handleResults = this.props.handleResults

    console.log(handleResults)

    return (
    <div>
      <div className= "home">
        <img className= "uYtitle" src={uYtitle} alt= "ultraYumm logo"/>
        <h1  className= "black montebello title">Get more energy!<span>&nbsp;&nbsp;</span><span className= "lighter">pack lighter</span></h1> 

       </div>
       
       
      <SearchForm
      routerProps = {this.props.routerProps}
      handleUpdate={this.props.handleUpdate}
      handleResults={this.props.handleResults}
      ></SearchForm>

    
            
      <AddTripForm></AddTripForm>
   </div>
   
   
   );
  }
}
export default HomePage;