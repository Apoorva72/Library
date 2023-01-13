import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/appContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<BrowserRouter>
 <AppContextProvider>
   <App />
  </AppContextProvider>
</BrowserRouter>
);
