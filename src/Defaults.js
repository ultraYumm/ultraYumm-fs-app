export const ITEMS= [
  {
 "id": "1",
 "food_name": "apple",
 "serving_unit": "medium (3\" dia)",
 "brand_name": null,
 "serving_qty": 1,
 "image": "https://nix-tag-images.s3.amazonaws.com/384_thumb.jpg",
 "serving_weight_grams": 182,
 "calsPerServing": 94.64
 },
 
 {
 "id": "2",
 "food_name": "Granola, House Blend",
 "brand_name": 	"House Granola",
 "serving_unit": "cup",
 "serving_qty": 1,
 "image": "https://nutritionix-api.s3.amazonaws.com/5572031b36869fb5124af830.jpeg",
 "serving_weight_grams": 28,
 "calsPerServing": 500
 },
 
 {
 "id": "3",
 "food_name": "Intense Dark Twilight Delight 72% Cacao",
 "brand_name": 	"Ghirardelli Chocolate",
 "serving_unit": "square",
 "serving_qty": 1,
 "image": "https://nix-tag-images.s3.amazonaws.com/384_thumb.jpg",
 "serving_weight_grams": 11,
 "calsPerServing": 545
 },
 
 {
 "id": "4",
 "food_name": "Beef Jerky",
 "brand_name": 	"Lawless Jerky",
 "serving_unit": "oz",
 "serving_qty": 1,
 "image": "https://nutritionix-api.s3.amazonaws.com/55312801c07cd0fd571ee6ee.jpeg",
 "serving_weight_grams": 28,
 "calsPerServing": 383
 },
 
 {
 "id": "5",
 "food_name": "dry red lentils",
 "brand_name": 	null,
 "serving_unit": "cup",
 "serving_qty": 1,
 "image": "https://nix-tag-images.s3.amazonaws.com/230_thumb.jpg",
 "serving_weight_grams": 192,
 "calsPerServing": 358
 },
 
 {
 "id": "6",
 "food_name": "hard parmesan",
 "brand_name": 	null,
 "serving_unit": "tsp",
 "serving_qty": 1,
 "image": "https://nix-tag-images.s3.amazonaws.com/5149_thumb.jpg",
 "serving_weight_grams": 5,
 "calsPerServing": 21
 },

 {
 "id": "7",
 "food_name": "doggieKibble",
 "brand_name": 	null,
 "serving_unit": "tsp",
 "serving_qty": 1,
 "image":"https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
 "serving_weight_grams": 5,
 "calsPerServing": 21
 }
]



export const DEFAULTITEM = [
    {calsPhg: 424},
    {calsPerServing: 100},
    {common_type: null},
    {food_name: "light popcorn"},
    {full_nutrients:[
      {attr_id: 208},
      {value: 120.204}
    ]
    },
    {id: 14},
    {image: "https://nix-tag-images.s3.amazonaws.com/3839_thumb.jpg"},
    {serving_qty: 1},
    {serving_unit: "oz"},
    {serving_weight_grams: 28.35}]



  export const selectTrip = (selectedTrip) => {
    const tripName = selectedTrip.name
    const tripDates = selectedTrip.trip_dates
    const tripTravelers = selectedTrip.traveler_names
    this.setState({
      selectedTrip: selectedTrip,    
      tripName: tripName,
      tripDates: tripDates,
      tripTravelers: tripTravelers
    });
  };


  export const PACKITEMS= [
    { "id":  "1",
      "tripId": "e",
      "tripDay": "2019-03-23T09:25:43.511Z",
      "travName": "Jack",
      "type": "Breakfast",
      "serving_qty": 1
  },
  
  { "id":  "2",
      "tripId": "e",
      "tripDay": "2019-03-23T09:25:43.511Z",
      "travName": "Stef",
      "type": "Lunch",
      "serving_qty": 2
  },
  
  { "id":  "3",
      "tripId": "e",
      "tripDay": "2019-03-24T09:25:43.511Z", 
      "travName": "Marielle",
      "type": "Dinner",
      "serving_qty": 3
  }, 
  
  { "id":  "4",
      "tripId": "e",
      "tripDay": "2019-03-24T09:25:43.511Z",  
      "travName": "Emilie",
      "type": "Snack",
      "serving_qty": 4
  },
  
  { "id":  "5",
      "tripId": "t",
      "tripDay": "2020-10-01T09:25:43.511Z",  
      "travName": "Stef",
      "type": "Snack",
      "serving_qty": 4
  },
  
  { "id":  "6",
      "tripId": "t",
      "tripDay": "2020-10-01T09:25:43.511Z",  
      "travName": "Suzy",
      "type": "Snack",
      "serving_qty": 4
  },
  
  { "id":  "7",
      "tripId": "t",
      "tripDay": "2020-10-01T09:25:43.511Z",  
      "travName": "Ringo",
      "type": "Snack",
      "serving_qty": 4
  },
  
  ]
  
  export const IMAGE= "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"

  export const TRIPS = [
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
    "trip_dates": ["2020-10-01T09:25:43.511Z", "2020-10-02T09:25:43.511Z"],
  }
  ]

  export const ITEMTYPES = [
    {"type": ["Breakfast", "Lunch", "Dinner", "Snack", "Other"]}
    
  ]
  
  