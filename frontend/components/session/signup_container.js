import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './singup';

const mapDispatchToProps = dispatch => ({
    // this will be called inside the signup.js form and is making sure that the dispach action 
    // 'createNewUser' is avaiable to them. 
    // 'createNewUser' is coming from session actions and where actions result in ajax calls
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

const mapStateToProps = (state) => {
    return {
      errors: state.errors.session
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);