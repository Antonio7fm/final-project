import React from 'react';
import { Link } from 'react-router-dom';


class GroupShow extends React.Component {
constructor(props){
super(props);
this.handleJoin = this.handleJoin.bind(this)
this.handleLeave = this.handleLeave.bind(this)
}
  
componentDidMount() {
  this.props.fetchGroup(this.props.match.params.id);
}

handleJoin(){
  this.props.joinGroup({user_id:this.props.currentUser.id, group_id:this.props.group.id});  
}

handleLeave(){
  this.props.leaveGroup({id:this.props.membership, group_id:this.props.group.id});  
}

renderGroupPage() {
  if (this.props.group) {

    const membershipButton = Number.isInteger(this.props.membership) ? 
    (<button className="join" onClick={this.handleLeave}>Leave Group</button>)
    :
    (<button className="join" onClick={this.handleJoin}>Join Us</button>);

  const group = this.props.group;      
    return (
      <div className="vbox">
        <div className="groupHeader hbox">
        <div className="bio-container hbox">
          <div className="div-of-trouble">
            <img className="groupImage" src={group.highres_link} alt=""/>            
          </div>
          <div className="info vbox">
             <ul>
              <h1>{group.name}</h1>
              <li>Location</li>
              <h3>{group.localized_location}</h3>
              <li>Members</li>   
              <h3>{this.props.memberships.length}</h3>                     
              <li>Organize</li>
              <h3>Organizer Name</h3>
            </ul>
            {membershipButton}
          </div>
          </div>
        </div>
        <div className="bodyWrapper hbox">        
          <div className="groupBody hbox">
            <div className="about">
              <h2>What we're about</h2>
              <p>{group.description}</p>
              <h2>Members</h2>
            </div>
            <div className="events">
              <h2>Upcoming Meetups</h2>
              <ul>
                <li>
                  <span>Group Events Here</span>
                  <button id="attend-button">Attend</button>
                </li>
                <li>
                  Group Events Here
                </li>
                <li>
                  Group Events Here
                </li>
              </ul>
            </div>
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