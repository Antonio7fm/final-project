import React from 'react';
import { Link } from 'react-router-dom';


class GroupShow extends React.Component {

componentDidMount() {
  this.props.fetchGroup(this.props.match.params.id);
}

renderGroupPage() {
  if (this.props.group) {
  const group = this.props.group;      
    return (
      <div className="vbox">
        <div className="groupHeader hbox">
          <div>
            <img className="groupImage" src={group.highres_link} alt=""/>            
          </div>
          <ul className="vbox">
            <h1>{group.name}</h1>
            <li>Location</li>
            <h3>{group.localized_location}</h3>
            <li>Members</li>   
            <h3>Member Count</h3>                     
            <li>Organize</li>
            <h3>Organizer Name</h3>
            <button className="join">Join Us</button>
          </ul>
        </div>
        <div className="groupBody hbox">
          <div className="about">
            <h2>What we're about</h2>
            {group.description}
            <h2>Members</h2>
          </div>
          <div className="events">
            <h2>Upcoming Meetups</h2>
          </div>
        </div>
      </div>
    )
  }
}

  render() {
    return(
      <div>
        {this.renderGroupPage()}
      </div>
    )
  }
}

export default GroupShow;