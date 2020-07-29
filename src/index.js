import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);



ReactDOM.render(
<BrowserRouter>
<App 
  />
  </BrowserRouter>, document.getElementById('root'));