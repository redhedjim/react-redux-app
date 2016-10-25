import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import ContactsPage from './components/contacts/ContactsPage';
import SingleContactPage from './components/contacts/SingleContactPage';

import requireAuth from './utils/requireAuth';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="new-event" component={ requireAuth(NewEventPage) } />
        <Route path="contacts" component={ requireAuth(ContactsPage) } />
        <Route path="contacts/jim" component={ requireAuth(SingleContactPage) } />         
       
    </Route>
)