import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './components/store.js';
import { Provider } from 'react-redux';
import ContextProvider from "./components/context/ContextProvider.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>

  
  <Provider store={store}>
     <BrowserRouter>
  
      <App />
    </BrowserRouter>
  </Provider>
  </ContextProvider>
 
);

