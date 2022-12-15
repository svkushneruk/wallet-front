import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/https://svkushneruk.github.io/wallet-front/home/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
