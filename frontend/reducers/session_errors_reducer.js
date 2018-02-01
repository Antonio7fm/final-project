import { strConst } from '../actions/session_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case strConst.RECEIVE_SESSION_ERRORS:
        return action.errors;
      case strConst.RECEIVE_CURRENT_USER:
        return state;
      default:
        return state;
    }
  };