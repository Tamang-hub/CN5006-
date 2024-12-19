import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GreetingElement from './mygreeting';
import GreetingElementwithProps from './mygreetingwithProps';

import AppColour from './AppBackgroundColour';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColour heading='This is first element' lb1= 'Name :'
    colour='blue'/>
    <AppColour heading='This is Second element' lb1= 'Name :'
    colour='white'/>
    <AppColour heading='This is Third element' lb1= 'Name :'
    colour='green'/>
    <AppColour heading='This is Fourth element' lb1= 'Name :'
    colour='maroon'/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
