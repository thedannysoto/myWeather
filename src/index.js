import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import weatherReducer from './reducers/weatherReducer.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(weatherReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

