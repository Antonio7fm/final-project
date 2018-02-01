import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const fetchGroups = groups => (
    $.ajax({
        method: 'GET',
        url: '/api/groups',
        data: { groups }
    })
);