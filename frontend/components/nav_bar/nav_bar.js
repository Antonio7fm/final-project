import React from 'react';
import { Link } from 'react-router-dom';
import MeetupLogo from '../../../app/assets/images/meetupLogo.svg'

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.name}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <div className="auth-corner">
        <Link className="auth-links" to="/login">Log in</Link>
        <Link className="auth-links" to="/signup">Sign up</Link>
      </div>
    </div>
  );

  return (
    <header className="nav-bar hbox">
      <div>
        <Link className="logo-link hbox" to="/"><MeetupLogo id="meetup-logo"/></Link>
      </div>
      <div>
        {display}
      </div>
    </header>
  )

}
