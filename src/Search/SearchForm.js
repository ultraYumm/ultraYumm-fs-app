import React, { Component } from "react";
import "../Font/Font.css";
import config from "../config";
import GoButton from "../FormElements/GoButton";
import "../FormElements/FormElements.css";
import { withRouter } from "react-router-dom";
import { Auth } from 'aws-amplify';



class SearchForm extends Component {

  componentDidMount () { Auth.currentAuthenticatedUser().then(user => {

    let id = user.attributes.sub
    let username = user.username

    this.props.getUser(id, username)
   
  });

    }


  render() {
    const onSubmitForm = (e) => {
      e.preventDefault();

      let searchTerm = e.target.searchTerm.value;
      this.props.handleUpdate(searchTerm);
      this.props.routerProps.history.push("/search-results");
      const apId = config.NUTRI_APID;
      const apiKey = config.API_NUTRI_KEY;
      const remoteUser = config.NUTRI_REMOTEUSER;
      const detailed = config.NUTRI_DETAILED;
      const getURL = config.API_NUTRI_ENDPOINT;

      function formatQueryParams(params) {
        const queryItems = Object.keys(params).map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join("&");
      }

      const displayResults = (responseJson) => {
        let searchResults = responseJson;
        return this.props.handleResults(searchResults);
      };

      function getResults(query) {
        const params = {
          query: searchTerm,
          detailed: detailed,
        };

        const queryString = formatQueryParams(params);
        const url = getURL + "?" + queryString;

        const options = {
          headers: new Headers({
            "x-app-id": apId,
            "x-app-key": apiKey,
            "x-remote-user-id": remoteUser,
          }),
        };

        fetch(url, options)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          })
          .then((responseJson) => displayResults(responseJson))
          .catch((err) => {});
      }
      getResults(searchTerm)
    };

    return (
      
        <form className= "myPlans" onSubmit={onSubmitForm}>
          <h2 className="white"><i className ="fas fa-skiing"></i>quick search!</h2>
          <label htmlFor="searchTerm" className="white montebello searchTerm"><i className ="fas fa-cookie-bite"></i> By name or brand 
          </label>
          <input
            className="skinBackground purple"
            name="searchTerm"
            type="text" 
            placeholder="Granola"
            required
            id="searchTerm"
          />

          <GoButton
           username = {this.props.username}/>
        </form>
  
    );
  }
}

export default withRouter(SearchForm);
