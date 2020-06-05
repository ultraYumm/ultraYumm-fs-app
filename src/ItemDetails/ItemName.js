import React, { Component } from 'react';
import '../Font/Font.css';
import '../FormElements/FormElements.css';
import "../Tables/Tables.css";
import { DEFAULTITEM } from "../Defaults";
import { NavLink } from "react-router-dom";


class ItemName extends Component {

    static defaultProps = {
        item:  {DEFAULTITEM},
        name: ""
      }
     
  render() {
      
 const name = this.props.name
 /*const item = this.props.item
 const handleSelectedItem = this.props.handleSelectedItem()*/

 

 

    return (
      <div>
       {name} 
      </div>

     
          
   )}
  
}
  

export default ItemName

/*<td className="itemH">
                    <NavLink
                     className = "noDeco"
                      to={`/item/${item.itemId}`}
                      onClick={() => {
                        const selectedItem = item;
                        handleSelectedItem(selectedItem);
                      }}
                    >
                     {name}

                    </NavLink>
                  </td>*/