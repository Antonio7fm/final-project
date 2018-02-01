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
import Groups from './groups/groups_container';
import { AuthRoute, ProtectedRoute } from  '../util/route_util';


export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    {/* <Route exact path="/" component={Home} /> */}
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute path="/groups" component={Groups} />
    {/* <AuthRoute path="/login" component={LoginContainer} /> */}
  </div>
);