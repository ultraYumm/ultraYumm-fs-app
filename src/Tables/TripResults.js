import React, { Component } from "react";
import "../Font/Font.css";
import TripName from "../TripDetails/TripName";
import TripYear from "../TripDetails/TripYear";
import Moment from "react-moment";
//import SaveButton from "../FormElements/SaveButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import GoToFiltersButton from "../FormElements/GoToFiltersButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import TripPackGraph from "../TripDetails/TripPackGraph";
import TripCalorieGraph from "../TripDetails/TripCalorieGraph";
import { NavLink } from "react-router-dom";
import ItemName from "../ItemDetails/ItemName";
import ServingQuant from "../ItemDetails/ServingQuant";
import ServingUnit from "../ItemDetails/ServingUnit";
import ServingWeight from "../ItemDetails/ServingWeight";
import "./Tables.css";
import CalsPerServing from "../ItemDetails/CalsPerServing";
import Delete from "../ItemDetails/Delete";
import ItemHeader from "./ItemHeader"
import ServQuantHeader from "./ServQuantHeader";
import UnitHeader from "./UnitHeader";
import WeightGHeader from "./WeightGHeader";
import TotalCalHeader from "./TotalCalHeader";
import DateHeader from "./DateHeader";
import TypeHeader from "./TypeHeader";
import TravlrHeader from "./TravlrHeader";
import DeleteHeader from "./DeleteHeader";
import BackButton from '../FormElements/BackButton';
import ForwardButton from '../FormElements/ForwardButton';
import DeleteButton from '../FormElements/DeleteButton';
import ItemImage from "../ItemDetails/ItemImage";
import ItemBrand from "../ItemDetails/ItemBrand";
import BrandHeader from "./BrandHeader";
import '../FormElements/FormElements.css';
import { ITEMS, TRIPS } from "../Defaults";
import { withRouter } from "react-router-dom";




class TripResults extends Component {
  static defaultProps = {
    selectedTrip: TRIPS,
    items: ITEMS
  };

  constructor(props) {
    super(props);
    this.state = {
      serving_qty: null,
      id: "",
      idToDelete: "",
      nameOfDelete: ""
    };
  }

  adjustQuant = (input, id) => {
    
    this.setState({
      serving_qty: input,
      id: id,
      trip_dates: [],
      item: {},
      serving_unit: "",
      calsPs: null,
      serving_weight_grams: null,
      tripDay: "",
      type: ""
    });
  };

  selectDay = (input, id) => {
    
    this.setState({
      tripDay: input,
      id: id
    });
  };


  selectType = (input, id) => {
  
    this.setState({
      type: input,
      id: id
    });
  };


  selectTraveler = (input, id) => {
    
    this.setState({
      travName: input,
      id: id
    });
  };


  selectItemToDelete = (id, name) => {
    
    this.setState({
      idToDelete: id,
      nameOfDelete: name
    });
    
  };
 

  render() {
    const selectedTrip = this.props.selectedTrip;
  
    const selectedTripItems = this.props.selectedTripItems;
    const tripItems = this.props.tripItems;

    const imageArray = tripItems.map((items) => items.image);
    const food_nameArray = tripItems.map((items) => items.food_name);
    const brandArray = tripItems.map((items) => items.brand_name);
    const fixedUnitArray = tripItems.map((items) => items.serving_unit);


    const fixedCalPerUnitArray = tripItems.map((items) => items.calsPerServing);

    const selectServingQuantArray = selectedTripItems
      .map((items) => items.serving_qty)
      .sort();

    const fixedServingWeightArray = tripItems.map(
      (items) => items.serving_weight_grams
    );
   
    const results = selectedTripItems.map((item, i) => {
    const food_name = food_nameArray[i];
    const image = imageArray[i];
    const brand_name = brandArray[i];
    const serving_unit = fixedUnitArray[i];
    const calsPerServing = fixedCalPerUnitArray[i];
    const serving_weight_grams = fixedServingWeightArray[i];
    const resultsObject = {
        image,
        food_name,
        brand_name,
        serving_unit,
        serving_weight_grams,
        calsPerServing,
        ...item,
      };

      return resultsObject;
    });

    const sum_CalServProducts = fixedCalPerUnitArray.reduce((sum, val, i) => sum + (val * selectServingQuantArray[i]), 0)

    const sum_WeightServProducts = fixedCalPerUnitArray.reduce((sum, val, i) => sum + (val * fixedServingWeightArray[i]), 0)/1000

    const getPackItems = this.props.getPackItems


    return (
      <section className="lightBlueBackground"
      onMouseOver = {getPackItems}>      
       
        <div className = "lightBlueBackground sticky">
           <div className="charts sticky cloudBlueBackground">
          <TripCalorieGraph cals={sum_CalServProducts}/>
          <TripPackGraph weight={sum_WeightServProducts}/>
          </div>
        
          <div className = "iconButtonContainer sticky">
        <BackButton/>
        <ForwardButton/>
        </div>
          <h2 className="montebello black sticky resultsTitle">
         
            <div className=" montebello black sticky resultsTitle">
              <TripName selectedTrip={selectedTrip}/>&nbsp;Results!&nbsp; 
              <TripYear selectedTrip={selectedTrip}/>
            </div>
          </h2>
        
       
        <div className="iconButtonContainer">
             <PrintButton/>
             <DeleteButton
            name = {this.state.nameOfDelete}
            idToDelete = {this.state.idToDelete}
          
            handleDeletePackItem = {(idToDelete) =>
              this.props.handleDeletePackItem(idToDelete)
            
            }

            getPackItems = {getPackItems}
             />
          </div>

          <div className="filterButtonContainer moreContainer sticky">
            <NavLink 
            className= "hidden" 
            to={`/trip-filter/${selectedTrip[0].food_name}`}>
              <GoToFiltersButton />
            </NavLink>

            <NavLink to={`/add-custom/${selectedTrip[0].food_name}`}>
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
           
          </div>
          </div>

          <table id="results-filtered" className="primaryFont desk">
            <tbody>
              <tr className="blueBackground white">  
                <DateHeader/>
                <TypeHeader/>
                <TravlrHeader/>
                <ItemHeader/>
                <ServQuantHeader/>
                <UnitHeader/>
                <WeightGHeader/>
                <TotalCalHeader/>
                <DeleteHeader/>
             
              </tr>
           

              {results.map((item, key) => (
                <tr className="one whiteBackground black" key={item.id}>
                
                  <td className="date">
                    <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>    
                  </td>

                  <td className="type">
                    {item.type}
                  </td>

                  <td className="traveler">
                    {item.travName}
                  </td>

                  <td className="itemH">
                  <NavLink
                  className = "noDeco"
                      to={`/trip-item/${item.id}`}

                    onClick={() => {
                    const selectTripItem =  item
                    this.props.handleSelectTripItem(selectTripItem)}} 
                       >
                      <ItemName 
                      name = {item.food_name} />
                      </NavLink>
                    </td>
                  <ServingQuant 
                    input = {Math.round(item.serving_qty)}
                    id = {item.id}
                    handleAdjustQuant = {(inputValue, id) =>
                      this.adjustQuant(inputValue, id)
                    }
                    />

                  <ServingUnit unit={item.serving_unit}/>

                  <ServingWeight
                   weight = {item.serving_qty * item.serving_weight_grams}
                   result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                   />

                  <CalsPerServing
                    calories =
                    {(item.serving_qty * item.calsPerServing)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      result = {Math.round(this.state.serving_qty * item.calsPerServing).toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      />
                  <Delete
                  idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
                  id = {item.id}
                  name = {item.food_name}
                  handleDeletePackItem = {(idToDelete) =>
                    this.props.handleDeletePackItem(idToDelete)
                  
                  }
                 
                  />
                 
                </tr>
              ))}
            </tbody>
          </table>

         
          {results.map((item, key) => (
          <table id="results-filtered" className="primaryFont whiteBackground mobileOnly" key={item.id}>
            
            <tbody>
             <tr className = "mobile" >
              <td className = "noBorder"> 
                <ItemImage image = {item.image}/>
              </td>
             </tr>
            </tbody>

            <tbody>  
            <tr className="itemH">
              <ItemHeader/>
              <td>
                      <NavLink
                      className = "noDeco"
                        to={`/trip-item/${item.id}`}
                        onClick={() => {
                          const selectTripItem =  item
                          this.props.handleSelectTripItem(selectTripItem)}} 
                             >
                      
                        <ItemName 
                        name = {item.food_name} 
                        item = {item}
                        handleSelectedItem = {this.props.handleSelectedItem}/>
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
            <DateHeader/>
            <td className="date">
                      <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>          
            </td>

            </tr>
            </tbody>
            
            <tbody>
            <tr>
            <TypeHeader/>
              <td className="type">
                        {item.type}          
              </td>
            </tr>
            </tbody>

            <tbody>
            <tr>
            <TravlrHeader/>
              <td className="type">
              {item.travName}        
              </td>
            </tr>
            </tbody>

            <tbody>
            <tr>
              <UnitHeader/>
              <ServingUnit unit={item.serving_unit}/>
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
                      }
                      />
            </tr>
            </tbody>

            <tbody>
            <tr>
            <WeightGHeader/>
            <ServingWeight
                    weight = {item.serving_qty * item.serving_weight_grams}
                    result = {Math.round(this.state.serving_qty * item.serving_weight_grams).toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    />
            </tr>
            </tbody>

            <tbody>
            <tr>
            <TotalCalHeader/>
            <CalsPerServing
                      calories =
                      {(item.serving_qty * item.calsPerServing)
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        result = {Math.round(this.state.serving_qty * item.calsPerServing).toFixed(0)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        />
            </tr>
            </tbody>

            <tbody>
            <tr>
            <DeleteHeader/>
            <Delete           
             idToDelete = {(id, name) => this.selectItemToDelete(id, name)}
             id = {item.id}
             name = {item.food_name}
             handleDeletePackItem = {(idToDelete) =>
              this.props.handleDeletePackItem(idToDelete)
            
            }
            />
            </tr>
            </tbody>
            </table>
          ))}

          

      </section>
    );
  }
}

export default withRouter (TripResults);




/*<div className="tableScroll tableAdjust add">
<ItemTypes itemTypes={itemTypes}
handleSelectType={(selectedType) =>
  this.selectType(selectedType)
}
/>
</div>

<div className="tableScroll tableAdjust add hidden">
<TripTravelers
tripTravelers={tripTravelers}
handleSelectTraveler={(selectedTraveler) =>
this.selectTraveler(selectedTraveler)
}
/>
</div>

<div className="tableScroll tableAdjust add">
{" "}
<TripDates tripDates={tripDates}
  handleSelectDay={(selectedDay) =>
  this.selectDay(selectedDay)
  }/>
</div>*/