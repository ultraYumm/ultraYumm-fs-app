import React, { Component } from "react";
import "../Font/Font.css";
import config from "../config";
import GoButton from "../FormElements/GoButton";
import "../FormElements/FormElements.css";
import { withRouter } from "react-router-dom";

import { NavLink, Link } from "react-router-dom";

class SearchForm extends Component {
  render() {
    const onSubmitForm = (e) => {
      e.preventDefault();

      let searchTerm = e.target.searchTerm.value;
      this.props.handleUpdate(searchTerm);
      this.props.routerProps.history.push("/search-results");
      const apId = config. NUTRI_APID;
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
      <div>
        <form onSubmit={onSubmitForm}>
          <h2 className="white"><i className ="fas fa-skiing"></i> Quick search!</h2>
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

          <GoButton/>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchForm);
