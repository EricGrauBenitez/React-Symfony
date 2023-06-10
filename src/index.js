import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
 


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


