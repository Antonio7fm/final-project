import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import groupsReducer from './groups_reducer';


const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    groups: groupsReducer,
});

export default rootReducer;