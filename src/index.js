import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Homepage from './containers/Homepage/Homepage.jsx';



import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from '../src/js/store/store';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


ReactDOM.render((
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </BrowserRouter>
      </Provider>
), document.getElementById('root'));
registerServiceWorker();
