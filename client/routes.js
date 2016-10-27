import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import UsersPage from './components/users/UsersPage';
import UserPage from './components/user/UserPage';
import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="users" component={UsersPage} />
        <Route path="user" component={UserPage} />
        <Route path="user/:id" component={UserPage} />
        <Route path="new-event" component={ requireAuth(NewEventPage) } />
    </Route>
)