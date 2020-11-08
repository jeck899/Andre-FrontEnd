import React from 'react';
import ReactDOM from 'react-dom';
//import Cardlist from './Cardlist';
//import Card from './Card';
import App from './containers/App';
import './index.css'; // has default or only one is being exported
// import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from './robots'; // has no defaults
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello greeting={"Hello React Ninja!"} /> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
