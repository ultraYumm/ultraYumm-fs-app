import React, { Component } from "react";
import "../Font/Font.css";
import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
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
import Add from "../ItemDetails/Add";
import { DEFAULTITEM, PACKITEMS } from "../Defaults";
import ImageHeader from "./ImageHeader"
import ItemHeader from "./ItemHeader"
import BrandHeader from "./BrandHeader";
import ServQuantHeader from "./ServQuantHeader";
import UnitHeader from "./UnitHeader";
import WeightGHeader from "./WeightGHeader";
import TotalCalHeader from "./TotalCalHeader";
import TotalCalsPhgHeader from "./TotalCalsPhgHeader";
import AddHeader from "./AddHeader";
import BackButton from '../FormElements/BackButton';
import ForwardButton from '../FormElements/ForwardButton';
import { v4 as uuidv4 } from 'uuid';

class SearchResults extends Component {
  static defaultProps = {
    results: {},
    common: [],
    branded: [],
    item:  {DEFAULTITEM},
    thumb: "",
    //packItems: {PACKITEMS}
  };

  constructor(props) {
    super(props);
    this.state = {
      serving_qty: 0,
      id: "",
      //packItems: {PACKITEMS}

    
      
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
    const trips = this.props.trips;

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
        common [i].calsPerServing = common[i].full_nutrients[0].value
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

    console.log(newBrandCommonArr)

    
    return (
      <section>
            
        <div className = "sticky lightBlueBackground">
       
        <div className = "sticky">
        <div className = "iconButtonsContainer">
                <div className = "back">
              <BackButton/>  
              </div>
              <div className = "forward">
              <ForwardButton/> 
        </div> 
       
        </div>
          <h2 className="montebello searchResultsTitle black">
            {" "}
            See your highest energy results!
          </h2>
        </div> 

        <div className="iconButtonContainer">
          <PrintButton />
          <span className= "mobileHide">
          <SaveButton />
          </span>
        </div>
        
          <div className="filterButtonContainer moreContainer">
            <NavLink to={`/add-custom`}
           >
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>
          </div>
          <table id="search-results" className="primaryFont desk">
            <tbody>
              <tr className="blueBackground white">
                <ImageHeader/>
                <ItemHeader/>
                <BrandHeader/>
                <ServQuantHeader/>
                <UnitHeader/>
                <WeightGHeader/>
                <TotalCalHeader/> 
                <TotalCalsPhgHeader/> 
              </tr>

              {newBrandCommonArr.map((item, key) => (
                <tr className="one whiteBackground black" key={key}>
                   <TableItemImage image = {item.image}/>
                
                  <td className="itemH">
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
                    calories =  {Math.round(item.calsPerServing)}
                    result = {Math.round(this.state.serving_qty * item.calsPerServing ).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />   
                    <CalsPerHg
                      calsPHg = {item.calsPhg}
                    />
               
                                   </tr>
              ))}
            </tbody>
          </table>

          <table id="search-results" className="primaryFont whiteBackground mobileOnly">
          {newBrandCommonArr.map((item, key) => 
          

         ( 
         <tbody  key={item.id}>
           <tr className = "mobile">
            <ItemImage image = {item.image}/>
           </tr>
           

          
           <tr className="itemH">
           <ItemHeader/>

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
                  </tr>
     
          
          <BrandHeader/>
                    <ItemBrand
                    brand = {!item.brand_name ? "common" : item.brand_name}
                    />

          <tr>
            <ServQuantHeader/>
                  <ServingQuant 
                            input = {Math.round(item.serving_qty)}
                            id = {item.id}
                            handleAdjustQuant = {(inputValue, id) =>
                              this.adjustQuant(inputValue, id)
                            }/>
          </tr>

          <tr>
          <UnitHeader/>
                <ServingUnit unit={item.serving_unit} />

          </tr>

          <tr>     
             <WeightGHeader/>
                    <ServingWeight
                    weight =  {Math.round(item.serving_weight_grams)}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
          </tr>

          <tr>        
                <TotalCalHeader/> 
                <CalsPerServing
                    calories =  {Math.round(item.calsPerServing)}
                    result = {Math.round(this.state.serving_qty * item.calsPerServing ).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />   
          </tr> 
          <tr>
                <TotalCalsPhgHeader/> 
                <CalsPerHg
                      calsPHg = {item.calsPhg}
                    />

          </tr>
        
           </tbody>
          
           
           
))}
</table>
                      
        
      </section>
    );
  }
}

export default SearchResults;
/*
<AddHeader/>

<Add 
trips={trips} />*/

