import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/components/App/App';
import reportWebVitals from './reportWebVitals';

const appHeight = () =>
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`
  );
window.addEventListener('resize', appHeight);
appHeight();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
