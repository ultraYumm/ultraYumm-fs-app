import React, { Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { defaultThemes } from './Themes';

import { conditionalRowStyles, customStyles } from './CustomFormats';
import { Button } from '@material-ui/core/Button';


const handleChange = (state) => {
  // You can use setState or dispatch with something like Redux so we can use the retrieved data
  console.log('Selected Rows: ', state.selectedRows);
};

const handleClearRows = () => {
  this.setState({ toggledClearRows: !this.state.toggledClearRows})
}
 

class ResultsTwo extends Component {

  
  render() {


    createTheme('solarized', {
      text: {
        primary: 'rgba(38, 11, 9, 1)',
        secondary: '#2aa198',
      },
      background: {
        default: 'rgba(242, 230, 223)',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#073642',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    });


    
    

    


    const packItems = this.props.packItems


    const columns = [
  {
    name: 'Item Name',
    selector: 'itemId',
    sortable: true,
  },
  {
    name: 'Trip',
    selector: 'tripId',
    sortable: true,
    right: true,
  },
];
   
    return (
       
        <div>
          <DataTable
        title="Arnold Movies"
        columns={columns}
        data={packItems}
        customStyles={customStyles}
        theme="solarized"
        selectableRows // add for checkbox selection
        onSelectedRowsChange={handleChange}
        
      />
  
    </div>  
           
        
   )}
  
}
  

export default ResultsTwo