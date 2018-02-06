import React from 'react';
import { Link } from 'react-router-dom';
import GroupPhotos from './group_photos_container';

class Groups extends React.Component {

  render() {

    return (
      <div className="main-page">
        <div className="login-banner">
          <h1>Find a Meetup</h1>
          <span>**#** Meetups nearby</span> 
        </div>
        <div className="body vbox">
          <div className="search-bar hbox">
            <form action="" className="hbox">
              <input id="mainKeywords" className="dropdown-toggle ellipsize " 
              type="text" name="keywords" size="30" maxLength="100" value="" 
              title="All Meetups" placeholder="All Meetups" autoComplete="off" 
              autoCorrect="on" spellCheck="true" data-key="*" data-name="*" />
              <div className="search-criteria">within  <a href="">50 miles</a>  of  <a href="">Walnut Creek</a></div>
            </form>
            <div className="group-calendar hbox">
              <div className="group">Groups</div>
              <div className="calendar">Calendar</div>
            </div>
          </div>
          <div className="sort">
            Sort by <a href="#">Recommended</a>
          </div>
          <GroupPhotos />
          <div>

          </div>
        </div>
      </div>
      
    )
  }
}

export default Groups;