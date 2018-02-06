import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import GroupPhotos from './group_photos';
// import Groups from './groups';


const mapStateToProps = state => ({
  groups: state.groups
});


const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupPhotos);
