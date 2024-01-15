// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// Render the root component (App) into the root element in the HTML file
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);


