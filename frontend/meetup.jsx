import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/session_util';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.login = APIUtil.login
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Meetup (React is Working)</h1>, root);
});