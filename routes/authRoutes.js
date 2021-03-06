/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: Route handler for Auth. Passport api added.
    # Copyright (c). All Rights Reserved.
*/

const passport = require('passport');

module.exports = (app) => {
    
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (_req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};