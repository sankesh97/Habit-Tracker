import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HabitsProvider } from './Context/HabitsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
