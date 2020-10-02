import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ,
  document.getElementById('root')
);

export { default as Login } from './component/Login';
export { default as Signup } from './component/Signup';
export { default as rooms } from './component/rooms';
export { default as RegisterRoom } from './component/RegisterRoom';
export { default as report } from './component/report';