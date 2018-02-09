export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
import * as GroupUtil from '../util/group_util';

const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const fetchGroups = () => dispatch => (
  GroupUtil.fetchGroups().then(groups => (
    dispatch(receiveGroups(groups))
  ))
);

export const fetchGroup = id => dispatch => (
  GroupUtil.fetchGroup(id).then(group => (
    dispatch(receiveGroup(group))
  ))
);

export const joinGroup = membership => dispatch => (
  GroupUtil.joinGroup(membership).then(group => (
    dispatch(receiveGroup(group))
  ))
);

export const leaveGroup = membership => dispatch => (
  GroupUtil.leaveGroup(membership).then(group => (
    dispatch(receiveGroup(group))
  ))
);