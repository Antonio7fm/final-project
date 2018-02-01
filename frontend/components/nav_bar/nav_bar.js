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
        <Link className="auth-links" to="/signup">Sign Up</Link>
        <Link className="auth-links" to="/login">Log In</Link>
      </div>
    </div>
  );

  return (
    <header className="nav-bar hbox">
      <div className="around-logo hbox">
        {/* <Link className="logo-link hbox" to="/"></Link> */}
        <MeetupLogo id="meetup-logo"/>
      </div>
      <div>
        {display}
      </div>
    </header>
  )

}
