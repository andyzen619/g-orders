import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import FirebaseContextProvider from './context/FirebaseContext';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

ReactDOM.render(
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
    ,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
