import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Meetup</h1>, root);
});