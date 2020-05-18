import React, { Component } from 'react';
import uYhomeLogo from '../Images/uYhomeLogo.png';
import './NavBar.css';



class Home extends Component {
  render() {
    return (
      <div>
          <img className="homeLogo" src={uYhomeLogo} alt= "ultraYumm home button"/>

      </div>
    );
  }
}
export default Home;