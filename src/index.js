import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import cards from './data/cards.json';
import customers from './data/customers.json';

ReactDOM.render(<App cards={cards} customers={customers}/>, document.getElementById('root'));