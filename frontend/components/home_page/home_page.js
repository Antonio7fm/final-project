import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
  if(currentUser){
      return (<Redirect to="/groups" />);
  }else{
    return (
    <div>
      <div className="video-banner">
        <video
          src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
          autoPlay="yes"
          className="video"

          loop="yes" data-vscid="cgnslx2fk"></video>
        <div className = "welcome-banner">
          <h1>What do you love?</h1>
          <h2>Do more of it with Meetup</h2>
          <Link to="/signup">Sign up</Link>
        </div>    
      </div>
    </div>
    );
  }
}
