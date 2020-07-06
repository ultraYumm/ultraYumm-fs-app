import React from 'react';
import ReactDOM from 'react-dom';
import TripResults from './TripResults';
import SearchResults from './SearchResults';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
     <TripResults />
  </BrowserRouter> 
  , div);
  ReactDOM.unmountComponentAtNode(div);
});




it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    
      <BrowserRouter>
       <SearchResults/>
      </BrowserRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
