/*
    # Author: Bharat Gupta
    # Date: 6th August, 2019
    # Description: All secret keys for prod environment added here.
    # Copyright (c). All Rights Reserved.
*/

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecretKey: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};