import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.guestLogin = this.guestLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    if(e) e.preventDefault()
    this.props.login(this.state)
      .then(() => this.props.history.push('/groups'));
  }

  guestLogin() {
    this.setState({ email: "guest@gmail.com", password: "password"}, this.handleSubmit);
  }

  renderErrors() {
    return(
      <ul className="sessionErrors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sessionForm vbox">
        <h2>Log in</h2>
        <br />
        {this.renderErrors()}
        <form className="signupForm" action="">
          <label htmlFor="email">Email address</label>
          <input 
          id="email" type="email" value={this.state.email} 
          onChange={this.handleInput('email')}
          />
          
          <label htmlFor="password">Password</label>
          <input 
          id="password" type="password" value={this.state.password} 
          onChange={this.handleInput('password')}
          />          
          
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        <section>Not registered with us yet? <Link to="/signup">Sign up.</Link>
        <br />
         or Login as <button onClick={this.guestLogin}>Guest</button></section>
      </div>
    )
  }
}

export default Login;