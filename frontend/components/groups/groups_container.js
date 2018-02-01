import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/session_actions';
import Group from './group';

const mapDispatchToProps = dispatch => ({
    // this will be called inside the group.js form and is making sure that the dispach action 
    // 'fetchGroups' is avaiable to them. 
    // 'fetchGroups' is coming from group actions and where actions result in ajax calls
    fetchGroups: formUser => dispatch(fetchGroups(searchCriteria))
});

export default connect(null, mapDispatchToProps)(Group);