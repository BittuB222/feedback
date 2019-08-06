/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: Passport strategy defined.
    # Copyright (c). All Rights Reserved.
*/

const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecretKey,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if(existingUser) {
                done(null, existingUser);
            } else {
                new User({ 
                    googleId: profile.id,
                    fullName: profile.displayName,
                    profile_img: profile.photos[0].value,
                    email: profile.emails[0].value,
                    verified_email: profile.emails[0].verified,
                    provider: profile.provider
                }).save().then(user => done(null, user))
            };
        });
    },
));