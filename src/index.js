// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 ile gelen yeni yöntem
import './index.css';  // Stil dosyanız
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
