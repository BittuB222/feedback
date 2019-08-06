/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: index.js file for Node App
    # Copyright (c). All Rights Reserved.
*/

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// Connect to Mongo
mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

const app = express();

app.use(
    cookieSession({
        maxAge: 30 *24 * 60 * 60 * 1000, //30 Days in milliseconds
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3009;
app.listen(PORT);