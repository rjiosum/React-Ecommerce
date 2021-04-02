import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import App from './App';
import {MobileNavBarProvider} from "./context/MobileNavBarContext";

ReactDOM.render(
  <React.StrictMode>
     <MobileNavBarProvider>
         <App />
     </MobileNavBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
