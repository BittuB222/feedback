/*
    # Author: Bharat Gupta
    # Date: 6th August, 2019
    # Description: Index js to render route component to DOM.
    # Copyright (c). All Rights Reserved.
*/

import 'materialize-css/dist/css/materialize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);