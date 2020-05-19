import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const TRIPS = [
  {"id": "e",
  "name":"Escalante",
  "traveler_names": ["Jack", "Stef", "Marielle", "Emilie", "Ringo"], 
  "trip_dates": 
  [
    {"2019-03-23T09:25:43.511Z": [
      {"lunch": [
        {"itemId": [
          {"1": {
            "traveler_names": ["Jack", "Stef", "Marielle", "Emilie"],
            "selected_serving_qtys": [1, 1, 1, 1]
          }}]
        }
       ]
      },
      {"snack": [
        {"itemId": [
          {"4": {
            "traveler_names": ["Jack", "Marielle"],
            "selected_serving_qtys": [2, 1]
          }},
          {"3": {
            "traveler_names": ["Stef", "Emilie"],
            "selected_serving_qtys": [3, 1]
          }}
        ]
       }
      ],
    },
  ]},

  {"2019-03-24T09:25:43.511Z": [
    {"breakfast": [
      {"itemId": [
        {"2": {
          "traveler_names": ["Jack", "Stef", "Marielle", "Emilie"],
          "selected_serving_qtys": [2, 2, 1, 1]
        }}]
      }
     ]
    },
    {"dinner": [
      {"itemId": [
        {"5": {
          "traveler_names": ["Jack", "Stef", "Marielle", "Emilie"],
          "selected_serving_qtys": [2, 1, 1, 1]

        }},
        {"6": {
          "traveler_names": ["Jack", "Stef", "Marielle", "Emilie"],
          "selected_serving_qtys": [2, 1, 1, 1]
        }}
      ]}]}
   ]}
  ]
 },

{"id": "t",
  "name":"Tende",
  "traveler_names": ["Suzy", "Michael", "Jack", "Stef", "Ringo"], 
  "trip_dates": [
    {"2021-03-23T09:25:43.511Z": [
      {"other": [
        {"itemId": [
          {"7": {
            "traveler_names": ["Ringo"],
            "selected_serving_qtys": [1]
           }}
          ]}]}
        ]},

    {"2021-03-24T09:25:43.511Z": []},
    {"2021-03-25T09:25:43.511Z": []},
    ]
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



 


ReactDOM.render(<App 
  trips = {TRIPS}
  users = {USERS}
  items = {ITEMS}

  />, document.getElementById('root'));