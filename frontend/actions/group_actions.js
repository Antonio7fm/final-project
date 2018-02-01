export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';
import { getGroups, } from '../util/group_util';

const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

const receiveSingleGroup = group => ({
  type: RECEIVE_SINGLE_GROUP,
  group
});

export const fetchGroups = () => dispatch => {
  return getGroups()
    .then(groups => dispatch(receiveGroups(groups)));
}