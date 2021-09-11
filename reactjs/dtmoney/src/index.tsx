import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import { App } from './App';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Some transaction',
          amount: 100,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Another transaction',
          amount: 200,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ];
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
