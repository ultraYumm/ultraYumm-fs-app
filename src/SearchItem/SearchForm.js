import React, { Component } from 'react';
import './Search.css';
import '../Font/Font.css';
import config from '../config'
import GoButton from '../FormElements/GoButton';



class searchForm extends Component {

  
  render() {

    
    const onSubmitForm = (e) => {
      e.preventDefault()
      let searchTerm = e.target.searchTerm.value
    console.log(searchTerm)


    const apId = config.APID
    
    const apiKey = config.API_KEY
    
    const remoteUser = config.REMOTEUSER
    
    const detailed = config.DETAILED
    
    const getURL = config.API_ENDPOINT   
    
    function formatQueryParams(params) {
      const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&')
    }
    
    function displayResults(responseJson) {
      console.log(responseJson.common)
      console.log(responseJson.branded)           
        }
    
    function getResults(query) {
      
      const params = {
      query: searchTerm,
      detailed: detailed,
      }
    
      const queryString = formatQueryParams(params)
      const url = getURL + '?' + queryString
    
      const options = {
        headers: new Headers({
          'x-app-id': apId,
          'x-app-key': apiKey,
          'x-remote-user-id':remoteUser
          })
      }
      
      fetch(url, options)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw new Error(response.statusText)
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
          
          })
    }
    console.log(getResults(searchTerm))
  }
    

   
    return (
        <form className= "searchForm" onSubmit={onSubmitForm}>
         <h2>Quick search!</h2>
            <label className= "search" >Search by name or brand</label>
               <input  className= "plumBackground white search"
                name='searchTerm'
                type='search'
                placeholder='Granola'
                required
              />
          <GoButton></GoButton>
       

      </form>
   )}
  
}
  

export default searchForm