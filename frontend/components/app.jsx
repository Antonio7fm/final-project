import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomePageContainer from './home_page/home_page_container';
import Groups from './groups/groups';
import GroupShowContainer from './group_show/group_show_container';
import { AuthRoute, ProtectedRoute } from  '../util/route_util';

export default () => (
  <div className="content">
    <div>
      <Route path="/" component={NavBarContainer}/>
      <Route exact path="/" component={HomePageContainer}/>    
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute exact path="/groups" component={Groups} />
      <Route exact path="/groups/:id" component={GroupShowContainer} />
    </div>
    <footer className="footer hbox">
      <a href="https://github.com/brackebusch">GitHub</a>
      <a href="https://www.linkedin.com/in/kyle-brackebusch?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByHnnfXw3Sw6TvgykzKQfaw%3D%3D">LinkedIn</a>
    </footer>
  </div>
);