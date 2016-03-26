'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

ReactDOM.render(
  Router.initializeRoute(),
  document.getElementById('root')
);
