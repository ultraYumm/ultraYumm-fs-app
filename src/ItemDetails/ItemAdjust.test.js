import React from 'react';
import ReactDOM from 'react-dom';
import ItemAdjust from './ItemAdjust';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
     <ItemAdjust />
  </BrowserRouter> 
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
