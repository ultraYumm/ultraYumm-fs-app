import React, { Component } from "react";
import "./Home.css";
import "../FormElements/FormElements.css";
import "../Font/Font.css";
import uYtitle from "../Images/uYtitle.png";
import snowyOwl from "../Images/snowyOwl.GIF";
import SearchForm from "../Search/SearchForm";
import AddTripForm from "../AddTrip/AddTripForm";

class HomePage extends Component {
  render() {
    
  const getTrips = this.props.getTrips
   
    return (
      <div className="home"
      //onMouseOver = {getTrips}
      >
        <div className="home"
        >
          <img className="uYtitle" src={uYtitle} alt="ultraYumm logo" />
          <h1 className="black montebello title">
            Get more energy!<span>&nbsp;&nbsp;</span>
            <span className="lighter">pack lighter</span>
          </h1>
          <div className= "primaryFont description">
            <div className= "descriptionText"><strong>ultraYumm</strong> helps you plan and pack just the right amount of food for your trip. Search you favorite eats and allocate them in precise amounts to your travelers by day and by meal. Keep everyone energized and happy with ultra-light packs!</div>
             <div className="snowyOwlcontainer"><img className="snowyOwl" src={snowyOwl} alt="ultraYumm logo" /></div>
          </div>
          
        
        </div>

        <SearchForm
          routerProps={this.props.routerProps}
          handleUpdate={this.props.handleUpdate}
          handleResults={this.props.handleResults}
        />

        <AddTripForm
         routerProps={this.props.routerProps}
         handleAddTrip = {this.props.handleAddTrip}
        
        />
      </div>
    );
  }
}
export default HomePage;
