import React, { Component } from 'react';
import '../Font/Font.css';
import './FormElements.css';
import '../Tables/Tables.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';   







class ExcelButton extends Component {

    
  render() {
   
   

    
    return (
        <button className= "tooltip iconButtons"
        type = "submit"><span className = "tooltiptext primaryFont white">export to xls</span>
        <ReactHTMLTableToExcel  
          table= {this.props.table}
          filename={this.props.filename}
          sheet= {this.props.sheet}
          buttonText={<i className="fas fa-file-excel black"></i>} />  
         
        </button>  
    )
    }  
}
  

export default ExcelButton;