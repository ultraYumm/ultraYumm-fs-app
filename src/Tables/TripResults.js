import React, { Component } from "react";
import "../Font/Font.css";

import TripName from "../TripDetails/TripName";
import TripDates from "../TripDetails/TripDates";
import ItemTypes from "../CustomItem/ItemTypes";
import TripTravelers from "../TripDetails/TripTravelers";
import TripYear from "../TripDetails/TripYear";
import Moment from "react-moment";
import SaveButton from "../FormElements/SaveButton";
import ResetButton from "../FormElements/ResetButton";
import PrintButton from "../FormElements/PrintButton";
import AddCustomButton from "../FormElements/AddCustomButton";
import GoToFiltersButton from "../FormElements/GoToFiltersButton";
import SearchMoreButton from "../FormElements/SearchMoreButton";
import TripPackGraph from "../TripDetails/TripPackGraph";
import TripCalorieGraph from "../TripDetails/TripCalorieGraph";
import Quant from "../CustomItem/Quant";
import { NavLink } from "react-router-dom";

import "./Tables.css";

class TripResults extends Component {
  static defaultProps = {
    selectedTrip: [],
  };

  render() {
    const selectedTrip = this.props.selectedTrip;

    console.log(selectedTrip);

    const selectedTripItems = this.props.selectedTripItems;

    const tripItems = this.props.tripItems;

    console.log(selectedTripItems);
    console.log(tripItems);

    const imageArray = tripItems.map((items) => items.image);

    const nameArray = tripItems.map((items) => items.food_name);

    const brandArray = tripItems.map((items) => items.brand);

    const fixedUnitArray = tripItems.map((items) => items.serving_unit);

    const fixedCalPerUnitArray = tripItems.map((items) => items.calPerServing);

    const selectServingQuantArray = selectedTripItems
      .map((items) => items.selected_serving_qty)
      .sort();

    const fixedServingWeightArray = tripItems.map(
      (items) => items.serving_weight_grams
    );

    const itemTypes = this.props.itemTypes;

    const results = selectedTripItems.map((item, i) => {
      const name = nameArray[i];

      const image = imageArray[i];

      const brand = brandArray[i];

      const fixedUnit = fixedUnitArray[i];

      const calPerServing = fixedCalPerUnitArray[i];

      const weightPerServing = fixedServingWeightArray[i];

      const resultsObject = {
        image,
        name,
        brand,
        fixedUnit,
        weightPerServing,
        calPerServing,
        ...item,
      };

      return resultsObject;
    });

    console.log(results);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sumCalsPerServing = () => {
      if (fixedCalPerUnitArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }
      return fixedCalPerUnitArray.reduce(reducer);
    };

    const sumWeightsPerServing = () => {
      if (fixedServingWeightArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }
      return fixedServingWeightArray.reduce(reducer);
    };

    console.log(sumWeightsPerServing());

    const sumServings = () => {
      if (selectServingQuantArray.length === 0) {
        const defaultResult = 1;
        return defaultResult;
      }

      return selectServingQuantArray.reduce(reducer);
    };

    const totalCals = sumCalsPerServing() * sumServings();

    const totalWeightKg = (sumWeightsPerServing() * sumServings()) / 1000;

    return (
      <section className="lightBlueBackground">
        <div className="charts redBackground">
          <TripCalorieGraph cals={totalCals}></TripCalorieGraph>
          <TripPackGraph weight={totalWeightKg}></TripPackGraph>
        </div>
        <div>
          <h2 className="montebello">
            <span className="resultsTitle montebello white">
              <TripName selectedTrip={selectedTrip}/>Results!
            </span>
            <span className="resultsTitle">
              <TripYear selectedTrip={selectedTrip}/>
            </span>
          </h2>
        </div>
        <form>
          <div className="filterButtonContainer">
            <SaveButton/>
            <PrintButton/>
            <ResetButton/>
          </div>

          <div className="filterButtonContainer moreContainer">
            <NavLink to={`/trip-filter/${selectedTrip[0].name}`}>
              <GoToFiltersButton />
            </NavLink>

            <NavLink to={`/add-custom/${selectedTrip[0].name}`}>
              <AddCustomButton />
            </NavLink>

            <NavLink to={`/`}>
              <SearchMoreButton />
            </NavLink>
          </div>

          <table id="results-filtered" className="primaryFont">
            <tbody>
              <tr className="blueBackground white">
                <th className="imageH hidden">Image</th>
                
                <th className="date">Date<span className="tableAdjust">(ajdust)</span></th>

                <th className="type">Type<span className="tableAdjust">(ajdust)</span></th>
                
                <th className="traveler">Traveler <span className="tableAdjust">(ajdust)</span></th>

                <th className="itemH">Item<span className="tableAdjust">(ajdust)</span></th>
                
                <th className="brandH hidden">Brand</th>
                
                <th className="servingH">Serving Quantity<span className="tableAdjust">(ajdust)</span></th>

                <th className="unitH">Unit</th>
                
                <th className="weightH tooltip gram">Weight (grams)</th>
                
                <th className="caloriesH cal calS">Calories</th>
                
                <th className="deleteH">Delete</th>
              </tr>

              {results.map((item, key) => (
                <tr className="one whiteBackground black" key={item.itemId}>
                  <td className="imageH hidden">
                    <img className="tableImage" src={item.image} alt="Item" />{" "}
                  </td>

                  <td className="date">
                    <Moment format="ddd-MMM-DD">{item.tripDay}</Moment>
                    <div className="tableScroll tableAdjust">
                      {" "}
                      <TripDates selectedTrip={selectedTrip}/>
                    </div>
                  </td>

                  <td className="type">
                    {item.type}
                    <div className="tableScroll tableAdjust">
                      <ItemTypes itemTypes={itemTypes}/>
                    </div>
                  </td>

                  <td className="traveler">
                    {item.travName}
                    <div className="tableScroll tableAdjust">
                      <TripTravelers
                        selectedTrip={selectedTrip}
                      />
                    </div>
                  </td>

                  <td className="itemH">{item.name}</td>

                  <td className="brandId hidden">{item.brand}</td>

                  <td className="servingH">
                    {item.selected_serving_qty}
                    <p className="tableAdjust">
                    <Quant/>
                    </p>
                  </td>

                  <td className="unitH"> {item.fixedUnit}</td>

                  <td className="weightH">
                    {item.selected_serving_qty * item.weightPerServing}{" "}
                    <p className="dataResult blackBackground white tableAdjust">10</p>
                  </td>

                  <td className="caloriesH tooltip cal calS">
                    {(item.selected_serving_qty * item.calPerServing)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                    <p className="dataResult blackBackground white tableAdjust">100</p>
                  </td>

                  <td className="delete">
                    {" "}
                    <input type="checkbox" className="delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </section>
    );
  }
}

export default TripResults;
