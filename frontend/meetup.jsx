import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/session_util';
import { fetchGroups } from './util/group_util';


document.addEventListener('DOMContentLoaded', () => {
  let initialState = undefined;
  if (window.currentUser) {
    initialState = {
      session: {
        currentUser: window.currentUser
      } 
    };
  }
  const store = configureStore(initialState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchGroups = fetchGroups;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});