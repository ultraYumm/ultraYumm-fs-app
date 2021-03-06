import React, { Component } from "react";
import "../Font/Font.css";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import "./Tables.css";
import { NavLink } from "react-router-dom";
import TableItemImage from "../ItemDetails/TableItemImage";
import ItemImage from "../ItemDetails/ItemImage";
import ItemName from "../ItemDetails/ItemName";
import ItemBrand from "../ItemDetails/ItemBrand";
import ServingQuant from "../ItemDetails/ServingQuant";
import ServingUnit from "../ItemDetails/ServingUnit";
import CalsPerHg from "../ItemDetails/CalsPerHg";
import CalsPerServing from "../ItemDetails/CalsPerServing";
import ServingWeight from "../ItemDetails/ServingWeight";
import { DEFAULTITEM, PACKITEMS} from "../Defaults";
import ImageHeader from "./ImageHeader"
import ItemHeader from "./ItemHeader"
import BrandHeader from "./BrandHeader";
import ServQuantHeader from "./ServQuantHeader";
import UnitHeader from "./UnitHeader";
import WeightGHeader from "./WeightGHeader";
import TotalCalHeader from "./TotalCalHeader";
import TotalCalsPhgHeader from "./TotalCalsPhgHeader";
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router-dom";


class SearchResults extends Component {
  static defaultProps = {
    results: {},
    common: [],
    branded: [],
    item:  DEFAULTITEM,
    thumb: "",
    packItems: PACKITEMS
  };

  constructor(props) {
    super(props);
    this.state = {
      serving_qty: 0,
      id: "",
      packItems: PACKITEMS

    
      
    };
  }

  adjustQuant = (input, id) => {
    
    this.setState({
      serving_qty: input,
      id: id
    });
  };

  


  render() {

    const common = this.props.common;
    const branded = this.props.branded;
   
    Array.prototype.push.apply(common, branded);

    const commonNutrients = () => {
      var results = common.map((item) => item.full_nutrients);
      return results;
    };

    const nutrients = commonNutrients();

    const commonCalsPerS = () => {
      var results = nutrients.map((nutrient) => {
        var data = nutrient.filter((item) => item.attr_id === 208);
        return data;
      });
      return results;
    };

    const calorieArray = commonCalsPerS();

    const removeNoCalNutrients = () => {
      for (let i = 0; i < common.length; i++) {
        common[i].full_nutrients = calorieArray[i];
        
        common[i].image = common[i].photo.thumb
        const replace = "%";
        common[i].cals_per_serving = common[i].full_nutrients[0].value
        common[i].nameId = common[i].food_name.replace(replace, "");
        common[i].id = uuidv4()
        common[i].calsPhg = !common[i].serving_weight_grams
          ? Math.round(common[i].full_nutrients[0].value)
          : Math.round(
              (common[i].full_nutrients[0].value /
                common[i].serving_weight_grams) *
                100
            );
      }
      return common;
    };

    const newBrandCommonArr = removeNoCalNutrients();

    newBrandCommonArr.sort(
      (b, a) => parseFloat(a.calsPhg) - parseFloat(b.calsPhg)
    );

    return (
      <section>
            
        <div className = "sticky lightBlueBackground">
       
        <div className = "sticky">
     
          <h2 className="montebello searchResultsTitle white">
            {" "}
            See your highest energy results!
          </h2>
        </div> 

        <div className="iconButtonContainer">
          <PrintButton />
        </div>
        
          <div className="filterButtonContainer moreContainer">
            <NavLink to={!this.props.username ?  `/sign-in` : `/add-custom`}
           >
              <AddCustomButton 
              addButtonText = {this.props.addButtonText}
              
              />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>
          </div>
          <table id="search-results" className="primaryFont desk">
            
              <thead className="blueBackground white">
                <tr>
                <ImageHeader/>
                <ItemHeader/>
                <BrandHeader/>
                <ServQuantHeader/>
                <UnitHeader/>
                <WeightGHeader/>
                <TotalCalHeader/> 
                <TotalCalsPhgHeader/> 
                </tr>
              </thead>
              
              <tbody>

              {newBrandCommonArr.map((item, key) => (
                <tr className="one whiteBackground black" key={key}>
                   
                   <TableItemImage image = {item.image}/>
                
                  <td className="itemH" headers = "item name">
                    <NavLink
                     className = "noDeco"
                      to={`/item/${item.nameId}`}
                      onClick={() => {
                        const selectedItem = item;
                        this.props.handleSelectedItem(selectedItem);
                      }}
                    >
                      <ItemName 
                      name = {item.food_name} 
                      item = {item}
                      handleSelectedItem = {this.props.handleSelectedItem}/>
                    </NavLink>
                  </td>

                    <ItemBrand
                    brand = {!item.brand_name ? "common" : item.brand_name}
                    />
                    <ServingQuant 
                    input = {Math.round(item.serving_qty)}
                    id = {item.id}
                    handleAdjustQuant = {(inputValue, id) =>
                      this.adjustQuant(inputValue, id)
                    }/>
                    <ServingUnit unit={item.serving_unit} />
                    <ServingWeight
                    weight =  {Math.round(item.serving_weight_grams)}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
                    <CalsPerServing
                    calories =  {Math.round(item.cals_per_serving)}
                    result = {Math.round(this.state.serving_qty * item.cals_per_serving ).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />   
                    <CalsPerHg
                      calsPHg = {item.calsPhg}
                    />
               
              </tr>
              ))}
            </tbody>
         </table>

         
          {newBrandCommonArr.map((item, key) => ( 
          <table id="search-results" className="primaryFont whiteBackground mobileOnly noBorder"  key={key}>
           
           <tbody>
            <tr className = "mobile">
              <td className = "noBorder">
              <ItemImage image = {item.image}/>
              </td>
            </tr>
           </tbody>

           <tbody>
            <tr className="itemH">
            <ItemHeader/>
              <td id= "item name">  
                    <NavLink
                     className = "noDeco"
                      to={`/item/${item.nameId}`}
                      onClick={() => {
                        const selectedItem = item;
                        this.props.handleSelectedItem(selectedItem);
                      }}
                    >
                      <ItemName 
                      name = {item.food_name} 
                      item = {item}
                      handleSelectedItem = {this.props.handleSelectedItem}
                   
                      />
                    </NavLink>
                 </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <BrandHeader/>
                    <ItemBrand
                    brand = {!item.brand_name ? "common" : item.brand_name}
                    />
             </tr>
           </tbody>
           
            <tbody>
              <tr>
                <ServQuantHeader/>
                  <ServingQuant 
                            input = {Math.round(item.serving_qty)}
                            id = {item.id}
                            handleAdjustQuant = {(inputValue, id) =>
                              this.adjustQuant(inputValue, id)
                            }/>
            </tr>
          </tbody>
       
          <tbody>
           <tr>
              <UnitHeader/>
                <ServingUnit unit={item.serving_unit} />
          </tr>
          </tbody>
         
          <tbody>
           <tr>     
             <WeightGHeader/>
                    <ServingWeight
                    weight =  {Math.round(item.serving_weight_grams)}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
          </tr>
         </tbody>

         <tbody>
          <tr>        
                <TotalCalHeader/> 
                <CalsPerServing
                    calories =  {Math.round(item.cals_per_serving)}
                    result = {Math.round(this.state.serving_qty * item.cals_per_serving ).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />   
          </tr> 
         </tbody>
       
         <tbody>
          <tr>
                <TotalCalsPhgHeader/> 
                <CalsPerHg
                      calsPHg = {item.calsPhg}
                    />
          </tr>
         </tbody>

          </table>))}    
      </section>
    );
  }
}

export default withRouter (SearchResults);
/*
<AddHeader/>

<Add 
trips={trips} />*/

