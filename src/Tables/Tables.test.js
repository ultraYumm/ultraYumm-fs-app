import React from 'react';
import ReactDOM from 'react-dom';
import TripResults from './TripResults';
import SearchResults from './SearchResults';
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
     <TripResults />
  </BrowserRouter> 
  , div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
  const tree = renderer
    .create( <BrowserRouter>
      <TripResults />
       </BrowserRouter> )
    .toJSON();
  expect(tree).toMatchSnapshot();  
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


it('renders the UI as expected', () => {
  const tree = renderer
    .create( <BrowserRouter>
        <SearchResults/>
       </BrowserRouter> )
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
