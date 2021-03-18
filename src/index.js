//& Import "React" & "ReactDOM" &//
import React from 'react';
import ReactDOM from 'react-dom';
//& Import "App.js" &//
import App from './App';
//& Import "Bootstrap" / "Fontawesome" &//
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
//& Import "SCSS" &//
import './scss/style.scss';

//! ------------------------------------------------------------------------------------------------------------------------------------------------------------------ !//

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
