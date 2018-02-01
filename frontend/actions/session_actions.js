import {
    postUser,
    postSession,
    deleteSession
} from '../util/session_util';

export const strConst = {
    LOGIN: "LOGIN",
    LOGOUT_CURRENT_USER: "LOGOUT_CURRENT_USER",
    SIGNUP: "SIGNUP",
    RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
    RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const login = formUser => dispatch => 
    postSession(formUser).then(user => dispatch(receiveCurrentUser(user)));


export const logout = () => dispatch => 
    deleteSession().then(() => dispatch(logoutCurrentUser()));

export const logoutCurrentUser = () => ({
    type: strConst.LOGOUT_CURRENT_USER
});

//this will be used inside of the singup container which will pass it into the form for use of the ajax call
export const createNewUser = formUser => dispatch => 
    postUser(formUser).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors));


//this will be used inside of the reducer after called in the above createNewUser
export const receiveCurrentUser = user => ({
    type: strConst.RECEIVE_CURRENT_USER,
    user
});

export const receiveErrors = errors => ({
    type: strConst.RECEIVE_ERRORS,
    errors
});