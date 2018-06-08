import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const items = [
  {
    name: 'banana',
    price: 1,
    quantity: 1
  },
  {
    name: 'watermelon',
    price: 2,
    quantity: 1
  },
  {
    name: 'poop',
    price: 10,
    quantity: 1
  },
  {
    name: 'fried chicken',
    price: 5,
    quantity: 1
  },
  {
    name: 'broccoli',
    price: 3,
    quantity: 1
  },
]
ReactDOM.render(<App items={items} />, document.getElementById('root'));
registerServiceWorker();
