import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = state => ({
    group: state.group
});

const mapDispatchToProps = dispatch => ({
    fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow);