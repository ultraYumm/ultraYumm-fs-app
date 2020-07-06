import React from 'react';
import ReactDOM from 'react-dom';
import AddTripForm from './AddTripForm';
import { BrowserRouter } from 'react-router-dom'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
     <AddTripForm />
  </BrowserRouter> 
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
