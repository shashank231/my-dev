import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';     // isliye line-5 comment ki
// import 'bootstrap/dist/css/bootstrap.min.css';  // for bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
