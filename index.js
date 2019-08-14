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
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport');

// Connect to Mongo
mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 *24 * 60 * 60 * 1000, //30 Days in milliseconds
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    /* Express to serve up production assets - main.js or main.css  */
    app.use(express.static('client/build'));

    /* Express to serve index.html file if it doesn't recognize route  */
    const path = require('path');
    app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

const PORT = process.env.PORT || 3009;
app.listen(PORT);