import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const TRIPS = [
  {"id": "e",
  "name":"Escalante",
  "traveler_names": ["Jack", "Stef", "Marielle", "Emilie", "Ringo"],
  "iframe": "https://www.google.com/maps/embed?pb=!4v1589308620339!6m8!1m7!1sH9R4rDjmbhhsQVA2f0Dq8Q!2m2!1d36.03291467946964!2d-111.8531019810478!3f9.17!4f0!5f0.7820865974627469", 
  "trip_dates": 
  [
    "2019-03-23T09:25:43.511Z", "2019-03-24T09:25:43.511Z","2019-03-25T09:25:43.511Z","2019-03-26T09:25:43.511Z","2019-03-27T09:25:43.511Z", ]},
       
{"id": "t",
  "name":"Tende",
  "traveler_names": ["Suzy", "Michael", "Jack", "Stef", "Ringo"],
  "iframe": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6991.493885443003!2d83.8670621985494!3d28.81661413001174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39be1420f935fa2f%3A0xb6f4363b17b0a97f!2sShree%20Muktinath%20Temple%2C%20Nepal!5e0!3m2!1sen!2sus!4v1589311708705!5m2!1sen!2sus" , 
  "trip_dates": ["2020-03-23T09:25:43.511Z", "2020-03-24T09:25:43.511Z"],
}
]


const USERS = [
  {"id": "1234",
  "user_name": "Stef",
  "password": "wind1",
  "trip_Ids": ["e", "t"]
 },
  {"id": "4567",
  "name": "Suzy",
  "password": "earth2",
  "trip_Ids": ["m"]
 },
  {"id": "7891",
  "name": "Marielle",
  "password": "fire3",
  "trip_Ids": ["s", "z"]
 },
]

const ITEMTYPES = [
  {"type": ["Breakfast", "Lunch", "Dinner", "Snack", "Other"]}
  
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
    "food_name": "Granola, House Blend",
    "brand": 	"House Granola",
    "serving_unit": "cup",
    "serving_qty": 1,
    "image": "https://nutritionix-api.s3.amazonaws.com/5572031b36869fb5124af830.jpeg",
    "serving_weight_grams": 28,
    "calPerServing": 500
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
    "image": "https://nutritionix-api.s3.amazonaws.com/555633f508a1194369620ef9.jpeg",
    "serving_weight_grams": 5,
    "calPerServing": 21
    }

]

const PACKITEMS= [
  { "itemId":  "1",
    "tripId": "e",
    "tripDay": "2019-03-23T09:25:43.511Z",
    "travName": "Jack",
    "type": "Breakfast",
    "selected_serving_qty": 1
},

{ "itemId":  "2",
    "tripId": "e",
    "tripDay": "2019-03-23T09:25:43.511Z",
    "travName": "Stef",
    "type": "Lunch",
    "selected_serving_qty": 2
},

{ "itemId":  "3",
    "tripId": "e",
    "tripDay": "2019-03-24T09:25:43.511Z", 
    "travName": "Marielle",
    "type": "Dinner",
    "selected_serving_qty": 3
}, 

{ "itemId":  "4",
    "tripId": "e",
    "tripDay": "2019-03-24T09:25:43.511Z",  
    "travName": "Emilie",
    "type": "Snack",
    "selected_serving_qty": 4
},

{ "itemId":  "5",
    "tripId": "t",
    "tripDay": "2019-03-26T09:25:43.511Z",  
    "travName": "Stef",
    "type": "Breakfast",
    "selected_serving_qty": 5
}, 

{ "itemId":  "6",
    "tripId": "t",
    "tripDay": "2020-03-23T09:25:43.511Z",  
    "travId": "Suzy",
    "type": "Dinner",
    "selected_serving_qty": 6
},

{ "itemId":  "7",
    "tripId": "t",
    "tripDay": "2020-03-24T09:25:43.511Z",  
    "travId": "Ringo",
    "type": "Other",
    "selected_serving_qty": 7
},


]





 


ReactDOM.render(
<BrowserRouter>
<App 
  trips = {TRIPS}
  users = {USERS}
  items = {ITEMS}
  packItems = {PACKITEMS}
  itemTypes = {ITEMTYPES}
  />
  </BrowserRouter>, document.getElementById('root'));