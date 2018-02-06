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
import Groups from './groups/groups';
import GroupShowContainer from './group_show/group_show_container';
import { AuthRoute, ProtectedRoute } from  '../util/route_util';


export default () => (
  <div>
    {/* <Route exact path="/" component={Home} /> */}
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/groups" component={Groups} />
    <Route exact path="/groups/:id" component={GroupShowContainer} />
    {/* <Route path="/" component={FooterContainer}/>           */}
  </div>
);