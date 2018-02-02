import { strConst } from '../actions/session_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case strConst.RECEIVE_ERRORS:
        return action.errors;
      case strConst.CLEAR_ERRORS:
        return [];
      case strConst.RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
    }
  };