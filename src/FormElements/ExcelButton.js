import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';
import '../Tables/Tables.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';   







class ExcelButton extends Component {

    
  render() {
   

    
    return (
      <div className= "tooltip iconButtons excel">
        <i className="fas fa-file-excel black" alt = "download to excel"
        type = "submit"><span className = "tooltiptext primaryFont white">export to xls</span>
        <ReactHTMLTableToExcel  
          table= "results-filtered"
          filename= "ultraYumm"
          buttonText= ""
          sheet= "myTrip"
          /> 
         
        </i>  
        </div>
    )
    }  
}
  

export default ExcelButton;