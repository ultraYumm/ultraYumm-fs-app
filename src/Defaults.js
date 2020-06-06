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
    {itemId: 14},
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

  