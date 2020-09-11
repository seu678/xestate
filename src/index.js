import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App /></React.StrictMode>,
  document.getElementById('root')
);

export { default as rooms } from './rooms';
export { default as RegisterRoom } from './RegisterRoom';
export { default as report } from './report';