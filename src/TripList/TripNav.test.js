import React from 'react';
import ReactDOM from 'react-dom';
import TripNav from './TripNav';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
     <TripNav />
  </BrowserRouter> 
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
