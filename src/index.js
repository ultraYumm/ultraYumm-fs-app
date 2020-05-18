import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const TRIPS = [
  {"id": "e",
  "name":"Escalante",
  "start_date":"2019-03-23T09:25:43.511Z","end_date":"2019-03-28T16:25:43.511Z"},
   {"id": "t",
  "name":"Tende",
  "start_date":"2022-05-21T09:30:43.511Z","end_date":"2022-05-29T18:25:43.511Z"},
   {"id": "m",
  "name":"Muktinath",
  "start_date":"2022-04-21T09:30:43.511Z","end_date":"2022-04-23T18:25:43.511Z"}
];

const TRAVELERS = [
  {"id": "ja",
  "name": "Jack"},
  {"id": "st",
  "name": "Stef"},
  {"id": "ma",
  "name": "Marielle"},
  {"id": "em",
  "name": "Emi"},
  {"id": "em",
  "name": "Michael"},
  {"id": "mi",
  "name": "Suzy"},
  {"id": "su",
  "name": "Jenna"},
  {"id": "je",
  "name": "Jon"},
  {"id": "jo",
  "name": "Kate"},
  {"id": "ka"}
 ]

const TRAVELERTRIPS = [
  {"traveler_id": "ja",
  "trip_id": "e"},
  {"traveler_id": "st",
  "trip_id": "e"},
  {"traveler_id": "em",
  "trip_id": "e"},
  {"traveler_id": "ma",
  "trip_id": "te"},
  {"traveler_id": "su",
  "trip_id": "t"},
  {"traveler_id": "mi",
  "trip_id": "t"},
  {"traveler_id": "ma",
  "trip_id": "m"},
  {"traveler_id": "je",
  "trip_id": "m"},
]
 


const ITEMS= [
    {
    "id": "1",
    "food_name": "apple",
    "serving_unit": "medium (3\" dia)",
    "brand": null,
    "serving_qty": 1,
    "image": "https://nix-tag-images.s3.amazonaws.com/384_thumb.jpg",
    "serving_weight_grams": 182,
    "calPerServing": 94.64
    },
  {
    "id": "2",
    "food_name": "Tomato Lentil Soup",
    "brand": 	"Veestro",
    "serving_unit": "oz",
    "serving_qty": 10,
    "image": "https://nutritionix-api.s3.amazonaws.com/568a3a316821d75839ce902d.jpeg",
    "serving_weight_grams": 283,
    "calPerServing": 81
    },
    {
    "id": "3",
    "food_name": "Intense Dark Twilight Delight 72% Cacao",
    "brand": 	"Ghirardelli Chocolate",
    "serving_unit": "square",
    "serving_qty": 1,
    "image": "https://nix-tag-images.s3.amazonaws.com/384_thumb.jpg",
    "serving_weight_grams": 11,
    "calPerServing": 545
      },
  {
    "id": "4",
    "food_name": "Beef Jerky",
    "brand": 	"Lawless Jerky",
    "serving_unit": "oz",
    "serving_qty": 1,
    "image": "https://nutritionix-api.s3.amazonaws.com/55312801c07cd0fd571ee6ee.jpeg",
    "serving_weight_grams": 28,
    "calPerServing": 383
      },
  {
    "id": "5",
    "food_name": "dry red lentils",
    "brand": 	null,
    "serving_unit": "cup",
    "serving_qty": 1,
    "image": "https://nix-tag-images.s3.amazonaws.com/230_thumb.jpg",
    "serving_weight_grams": 192,
    "calPerServing": 358
      },
  {
    "id": "6",
    "food_name": "hard parmesan",
    "brand": 	null,
    "serving_unit": "tsp",
    "serving_qty": 1,
    "image": "https://nix-tag-images.s3.amazonaws.com/5149_thumb.jpg",
    "serving_weight_grams": 5,
    "calPerServing": 21
      },

  {
    "id": "7",
    "food_name": "doggieKibble",
    "brand": 	null,
    "serving_unit": "tsp",
    "serving_qty": 1,
    "image": "https://nix-tag-images.s3.amazonaws.com/5149_thumb.jpg",
    "serving_weight_grams": 5,
    "calPerServing": 21
      }
    


]

     
 const MENUTYPES= [
  {"id": "b",
  "name": "Breakfast"},
  {"id": "l",
  "name": "Lunch"},
  {"id": "d",
  "name": "Dinner"},
  {"id": "s",
  "name": "Snack"},
  {"id": "o",
  "name": "Other"},
]

 
const PACKITEMS= [
  { "packItemId": "1000p",
    "itemId":  "1",
    "tripId": "e",
    "tripDay": 1,  
    "travId": "ja",
    "type": "l",
    "selected_serving_qty": 1
},

  { "packItemId": "2000p",
    "itemId":  "2",
    "tripId": "e",
    "tripDay": 1,  
    "travId": "st",
    "type": "l",
    "selected_serving_qty": 1
},

  { "packItemId": "3000p",
    "itemId":  "3",
    "tripId": "e",
    "tripDay": 1,  
    "travId": "ma",
    "type": "l",
    "selected_serving_qty": 1
}, 

{   "packItemId": "4000p",
    "itemId":  "4",
    "tripId": "e",
    "tripDay": 1,  
    "travId": "em",
    "type": "b",
    "selected_serving_qty": 1
},
{ "packItemId": "5000p",
    "itemId":  "5",
    "tripId": "t",
    "tripDay": 2,  
    "travId": "su",
    "type": "s",
    "selected_serving_qty": 2
},

  { "packItemId": "6000p",
    "itemId":  "6",
    "tripId": "t",
    "tripDay": 2,  
    "travId": "jo",
    "type": "d",
    "selected_serving_qty": 3
},

  { "packItemId": "7000p",
    "itemId":  "1",
    "tripId": "m",
    "tripDay": 3,  
    "travId": "je",
    "type": "l",
    "selected_serving_qty": 2
}, 

{   "packItemId": "8000p",
    "itemId":  "7",
    "tripId": "m",
    "tripDay": 1,  
    "travId": "ma",
    "type": "o",
    "selected_serving_qty": 1
},


]
 


 


ReactDOM.render(<App 
  trips = {TRIPS}
  travelers = {TRAVELERS}
  travelerTrips = {TRAVELERTRIPS}
  menuTypes = {MENUTYPES}
  items = {ITEMS}
  packItems = {PACKITEMS}
  
  />, document.getElementById('root'));