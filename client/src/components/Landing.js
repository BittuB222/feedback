/*
    # Author: Bharat Gupta
    # Date: 6th August, 2019
    # Description: Landing component design/function
    # Copyright (c). All Rights Reserved.
*/

import React from 'react';
import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 40rem;
    margin: 5rem auto;
    border-radius: 0.7rem;
    padding: 6rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    background-color: #fdb808;
    box-shadow: 0rem 0.5rem 3.5rem rgba(0,0,0,0.2);
`;

const baseStyle = css`
    color: ${({color}) => color==='white' ? '#FFFFFF':'#FDB808'};
    font-weight: ${({bold}) => bold ? '700':'500'};
    margin-top: 0;
    letter-spacing: 0.5px;
`;

const Heading1 = styled.h1`
    font-size: 2.2rem;
    text-transform: uppercase;
    ${baseStyle}
`;

const Heading4 = styled.h4`
    font-size: 1.3rem;
    ${baseStyle}
`;

const Landing = () => {
    return (
        <>
            <FormWrapper>
                <Heading1 color='white'>
                    Feedback App
                </Heading1>
                <Heading4 color='white'>
                    Collect feedback from your customers. Get insight of your product from timely feeback from customers.
                </Heading4>
            </FormWrapper>
        </>
    );
};

export default Landing;