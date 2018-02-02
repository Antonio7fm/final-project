import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);