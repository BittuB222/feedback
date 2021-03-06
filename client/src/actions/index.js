/*
    # Author: Bharat Gupta
    # Date: 7th August, 2019
    # Description: Index js for all actions
    # Copyright (c). All Rights Reserved.
*/

import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async(dispatch) => {
    const res = await axios.get('/api/current_user');
    
    dispatch({ 
        type: FETCH_USER,
        payload: res.data 
    })
};

export const handleToken = (token) => async(dispatch) => {
    const res = await axios.post('/api/payment', token);
    
    dispatch({ 
        type: FETCH_USER,
        payload: res.data
    })
};