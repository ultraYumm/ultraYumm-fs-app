import React from 'react'

const UltraContext = React.createContext({
  folders: [],
  notes: [],
  handleSearch: () => {},
  handleAddTrip: () => {},
  handleAddItem: () => {},
  handleAddCustomItem: () => {},
  deleteItem: () => {},
  updateItem: () => {},
  selectTrip: () => {}
  
})

export default UltraContext