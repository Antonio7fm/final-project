import React from 'react';
import { Link } from 'react-router-dom';
import MeetupLogo from '../../../app/assets/images/meetupLogo.svg'

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="auth-corner">
      <Link to="/login" onClick={logout}>Logout</Link>
    </div>
  ) : (
    <div>
      <div className="auth-corner">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
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
