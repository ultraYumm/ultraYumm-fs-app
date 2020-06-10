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