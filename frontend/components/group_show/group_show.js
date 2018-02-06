import React from 'react';
import { Link } from 'react-router-dom';


class GroupShow extends React.Component {

componentDidMount() {
  this.props.fetchGroup(this.props.match.params.id);
}

  render() {
    if (this.props.group){
      const group = this.props.group
      return (
        <div className="vbox">
          <div className="groupHeader hbox">
            <img className="groupImage" src="" alt=""/>
            <ul className="vbox">
              <h1>{group.name}</h1>
              <li>Location</li>
              <h3>City Name</h3>
              <li>Member</li>   
              <h3>Member Count</h3>                     
              <li>Organize</li>
              <h3>Organizer Name</h3>
              <button className="join">Join Us</button>
            </ul>
          </div>
          <span>Next Meetup</span>
          <div className="hbox">
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default GroupShow;