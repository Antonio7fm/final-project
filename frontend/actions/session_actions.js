import {
  postUser,
  postSession,
  deleteSession
} from '../util/session_util';

export const SessionConstants = {
    LOGIN: "LOGIN",
    LOGOUT_CURRENT_USER: "LOGOUT_CURRENT_USER",
    SIGNUP: "SIGNUP",
    RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
    RECEIVE_ERRORS: "RECEIVE_ERRORS"
  };
  
  
export const receiveCurrentUser = user => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: SessionConstants.LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser) 
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then( () => dispatch(logoutCurrentUser()));


export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});


