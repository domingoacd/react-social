import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App.jsx';

console.log('jejejeje');
ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);