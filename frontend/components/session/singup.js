import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      email: '',
      password: '',
     }
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // passed through props via singup_container which binds dispatch actions to properties
    this.props.createNewUser(this.state) 
      .then( () => this.props.history.push('/groups'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form action="">
          <label htmlFor="name">Your Name (this is public)</label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleInput('name')}/>

          <label htmlFor="email">Email address</label>
          <input id="email" type="email" value={this.state.email} onChange={this.handleInput('email')}/>
          
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={this.state.password} onChange={this.handleInput('password')}/>          
          
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup;