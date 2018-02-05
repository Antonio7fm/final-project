import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/session_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, { match }) => {
    const groupId = parseInt(match.params.groupId);
    const group = selectGroup(state.entities, match.params.groupId);
    return {
        groupId,
        group
    };
};

const mapDispatchToProps = dispatch => ({
    // this will be called inside the group_show.js form and is making sure that the dispach action 
    // 'fetchGroup' is avaiable to them. 
    // 'fetchGroup' is coming from group actions and where actions result in ajax calls
    fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);