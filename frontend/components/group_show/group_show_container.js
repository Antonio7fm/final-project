import { connect } from 'react-redux';
import { fetchGroup, joinGroup, leaveGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownprops) => ({
    group: state.groups[ownprops.match.params.id],
    currentUser: state.session.currentUser,
    memberships: state.groups.members,
    membership: state.groups.membership
});

const mapDispatchToProps = dispatch => ({
    fetchGroup: id => dispatch(fetchGroup(id)),
    joinGroup: membership => dispatch(joinGroup(membership)),
    leaveGroup: membership => dispatch(leaveGroup(membership))    
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);