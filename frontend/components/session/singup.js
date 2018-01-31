import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      bio: '',
      lat: 5,
      lon: 9
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
    this.props.createNewUser(this.state)
      .then( () => this.props.hisotry.push('/groups'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form action="">
          <label> 
            Email:
            <input type="email" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>
          <label> 
            Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
          </label>
          <label> 
            Zipcode:
            <input type="text"/>
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup;