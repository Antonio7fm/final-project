import merge from 'lodash/merge';

import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP
} from '../actions/group_actions';
import { log } from 'util';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      const newGroup = action.group;
      const organizer = action.organizer
      console.log(organizer);
      return Object.assign({}, state, newGroup);
    default:
      return state;
  }
};

export default groupsReducer;