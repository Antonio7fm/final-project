import React from 'react';
import { Link } from 'react-router-dom';

class GroupPhotos extends React.Component {
  constructor(props) {
  super(props)
  }

componentDidMount() {
  this.props.fetchGroups();
}

renderGroupLinks() {
  if (this.props.groups.length) {
    return(
      this.props.groups.map( group => 
        <li key={group.id}>
            <Link to={`/groups/${group.id}`}>
                <span>{group.name}</span>
                <img src={group.photo_link} alt={group.name} />
            </Link> 
        </li>
      ) 
    )
  }
}


render() {
  return(
    <ul className="container">
      {this.renderGroupLinks()}
    </ul>
  )
}
 
}

export default GroupPhotos;