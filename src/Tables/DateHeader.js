import React, { Component } from "react";
import "../Font/Font.css";
import "./Tables.css";
import '../FormElements/FormElements.css';


class DateHeader extends Component {
  

 

  render() {

    return (
        
        <th className="date" id= "date header">
           <span className="hidden">Date</span>
          <i className ="fas fa-calendar-day" alt= "date header"></i></th>
    )
}
}

export default DateHeader