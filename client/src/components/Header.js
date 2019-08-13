/*
    # Author: Bharat Gupta
    # Date: 6th August, 2019
    # Description: Header component design
    # Copyright (c). All Rights Reserved.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payment from './Payment';

const AStyledComponet = styled.a`
    display: flex;
    text-transform: uppercase;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: #FFFFFF;
    border-bottom: 1px solid transparent;
    font-family: 'Roboto', sans-serif;
    margin: 0px 1rem;
    transition: all 0.2s ease 0s;
`;

const StyledButton = styled.button`
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
    margin: 0.2rem 0.2rem;
    pointer-events: none;
    cursor: not-allowed;
`;

class Header extends Component {
    
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <AStyledComponet href='/auth/google'>Login with Google</AStyledComponet>
                    </li> 
                );
            default:
                return [
                <li key='btn-payment'>
                    <Payment />
                </li>,
                <li key='total-credits'>
                    <StyledButton>CREDITS: {this.props.auth.emailCredits}</StyledButton>
                </li>,
                <li key='btn-logout'>
                    <AStyledComponet href='/api/logout'>Logout</AStyledComponet>
                </li>
            ];
        };
    };
    
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className='left brand-logo'
                    >
                        CloudLab Solution
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    };
};

const mapStateToProps = ({ auth }) => ({
    auth: auth
});

export default connect(mapStateToProps)(Header);