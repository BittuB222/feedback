/*
    # Author: Bharat Gupta
    # Date: 12th August, 2019
    # Description: Stripe payment wrapper component
    # Copyright (c). All Rights Reserved.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

const StyledButton = styled.button`
    cursor: pointer;
    width: 100%;
    outline: none;
    padding: 0.9rem 1rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #659EC7
    border: none;
    transition: all 0.2s;
    margin: 0.2rem 0 0.2rem 0;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(2px);
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #333;
    }
`;

class Payment extends Component {
    render() {
        return(
            <StripeCheckout
                name='Feedback App'
                description='$5 for 5 email credits for campaign'
                amount={500} //5 Dollars = 500 Cents
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <StyledButton>ADD CREDITS</StyledButton>
            </StripeCheckout>
        );
    };
};

export default connect(null, actions)(Payment);