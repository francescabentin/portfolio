import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ReactGA from 'react-ga';
import { HashRouter } from 'react-router-dom'; 

ReactGA.initialize('G-WH86X63JFN');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);


