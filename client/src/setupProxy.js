/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: Proxy file
    # Copyright (c). All Rights Reserved.
*/

const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:3009' }));
};