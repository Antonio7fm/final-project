import { receiveGroup, receiveErrors } from '../actions/group_actions';

export const fetchGroups = () => (
    $.ajax({
        method: 'GET',
        url: '/api/groups',
    })
);

export const fetchGroup = id => (
    $.ajax({
        method: 'GET',
        url: `/api/groups/${id}`,
    })
);

export const joinGroup = (membership) => (
    $.ajax({
        method: 'POST',
        url: `/api/groups/${membership.group_id}/memberships`,
        data: {membership}
    })
);

export const leaveGroup = (membership) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/groups/${membership.group_id}/memberships/${membership.id}`,
        data: {membership}
    })
);