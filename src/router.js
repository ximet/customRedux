'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import CustomPage from './containers/CustomPage';

const RouterSetting = {
    initializeRoute () {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/page" component={CustomPage}/>
                </Route>
            </Router>
        );
    }
};

export default RouterSetting;
