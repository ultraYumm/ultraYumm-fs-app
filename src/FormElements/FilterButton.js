import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';





class FilterButton extends Component {

  
  render() {

    
    return (
      <div className= "filter">
          <button 
            className= "black montebello skinBackground filter sticky"
            type = "submit">
            Filter
          </button>
      </div>
    )
 }  
}
  

export default FilterButton