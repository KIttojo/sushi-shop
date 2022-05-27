import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
