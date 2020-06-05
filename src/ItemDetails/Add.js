import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import TripNames from "../CustomItem/TripNames";
import { DEFAULTITEM } from "../Defaults";



class Add extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
      }
     
  render() {
      
 
const trips = this.props.trips

    return (
        <td className="add">
        <span className="add">
          <TripNames trips={trips} />
        </span>
      </td>
          
   )}
  
}
  

export default Add