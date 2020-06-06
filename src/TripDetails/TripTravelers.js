import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';




class TripTravelers extends Component {
  static defaultProps = {
    tripTravelers:  [""],
  }

  render() {
      
    const tripTravelers = this.props.tripTravelers
  
  
      return (
        <div className= "filterSelection"> 
       <ul className= "scroll"> 
{tripTravelers.map((name)=> (
  <li key= {name}>

  <label className="labelContainer"> {name}
       <input type="checkbox"/>
       <span className="checkmark"></span>
   </label>
  </li>
))}   
</ul>
        </div>
     )}
    
  }
  

export default TripTravelers

/*<ul className= "scroll"> 
{tripTravelers.map((name)=> (
  <li key= {name}>

  <label className="labelContainer"> {name}
       <input type="checkbox"/>
       <span className="checkmark"></span>
   </label>
  </li>
))}   
</ul>*/