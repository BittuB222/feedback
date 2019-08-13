/*
    # Author: Bharat Gupta
    # Date: 6th August, 2019
    # Description: Reducer Index js
    # Copyright (c). All Rights Reserved.
*/

import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});