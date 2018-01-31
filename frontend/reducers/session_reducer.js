import merge from 'lodash/merge';

import { strConst } from '../actions/session_actions';

const _nullSession = Object.freeze({ currentUser: null });

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case strConst.RECEIVE_CURRENT_USER:
            return merge({}, { currentUser: action.user });
        case strConst.LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;