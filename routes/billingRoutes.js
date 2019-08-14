/*
    # Author: Bharat Gupta
    # Date: 12th August, 2019
    # Description: Route handler for Billing - Stripe.
    # Copyright (c). All Rights Reserved.
*/

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/payment', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Charge for Feedback App',
            source: req.body.id
        });
        req.user.emailCredits += 5;
        const response = await req.user.save();
        res.send(response);
    });
};