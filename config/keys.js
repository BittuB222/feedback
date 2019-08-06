/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: Credentials to return for Dev or Prod as per env.
    # Copyright (c). All Rights Reserved.
*/

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
};