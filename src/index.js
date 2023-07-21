import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import App2 from './App2';
Amplify.configure(config);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      {/* <App /> */}
      <App2/>
  </Router>
);


