import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_axios_tutorial from './App_axios_tutorial';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <App_axios_tutorial /> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
