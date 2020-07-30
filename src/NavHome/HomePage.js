import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import snowyOwl from "../Images/snowyOwl.GIF";
import SearchForm from "../Search/SearchForm";


class HomePage extends Component {
  render() {
   
    
  
    return (
      <div className= "home">
        <div className= "home">
          <img className= "uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <h1 className= "black montebello title">
            TESTING AGAIN Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter</span>
          </h1>
          <div className= "primaryFont description">
            <div className= "descriptionText"><strong>ultraYumm</strong> helps you plan and pack just the right amount of food for your trip. Search you favorite eats and allocate them in precise amounts to your travelers by day and by meal. Keep everyone energized and happy with ultra-light packs!</div>
             <div className="snowyOwlcontainer"><img className="snowyOwl" src={snowyOwl} alt="snowy owl gif" /></div>
          </div>
        </div>
        
       

        <SearchForm
          routerProps={this.props.routerProps}
          handleUpdate={this.props.handleUpdate}
          handleResults={this.props.handleResults}
          getUser ={this.props.getUser}
          trips = {this.props.trips}
          selectTrip= {this.props.selectTrip}
          goButtonText = {this.props.goButtonText}
          username = {this.props.username}

          getTrips = {this.props.getTrips}
        />

       
      </div>
    );
  }
}
export default HomePage;

