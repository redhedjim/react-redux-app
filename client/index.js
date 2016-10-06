import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducers';

import routes from './routes';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f    
    )  
);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('app'));