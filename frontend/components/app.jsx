import React from 'react';
import { Provider } from 'react-redux';
import SignupContainer from './session/signup_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


export default () => (
  <div>
    {/* <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} /> */}
    <Route path="/signup" component={SignupContainer} />
    {/* <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/groups" component={ChirpIndexContainer} /> */}
  </div>
);