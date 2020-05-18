import React, { Component } from 'react';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import SearchForm from './SearchItem/SearchForm';


class App extends Component {
  render() {
    return (
      <div className="App">
            <NavBar></NavBar>
            <SearchForm></SearchForm>
      </div>
    );
  }
}
export default App;