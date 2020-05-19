import React, { Component } from 'react';
import './App.css';
import './Font/Font.css';
import NavBar from './NavHome/NavBar';
import Search from './SearchItem/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
            <NavBar></NavBar>
            <Search></Search>
      </div>
    );
  }
}
export default App;