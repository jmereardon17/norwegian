import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/styles.scss';

const concepts = [
  {
    type: 'numbers',
    title: '1 to 10',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '23.12.21'
  },
  {
    type: 'greeting',
    title: 'Introductions',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '23.12.21'
  },
  {
    type: 'conversation',
    title: 'Conversation Starters',
    text: 'Ut enim ad minim veniam.',
    date: '23.12.21'
  },
  {
    type: 'nouns',
    title: 'Places',
    text: 'Quis nostrud exercitation ullamco laboris nisi.',
    date: '23.12.21'
  },
  {
    type: 'verbs',
    title: 'Actions',
    text: 'Ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    date: '23.12.21'
  },
  {
    type: 'adjectives',
    title: 'Descriptive',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '10 to 20',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '20 to 30',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '40 to 50',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '23.12.21'
  }
];

ReactDOM.render(
  <App concepts={concepts} />,
  document.getElementById('root')
);
