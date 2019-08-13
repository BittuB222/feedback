/*
    # Author: Bharat Gupta
    # Date: 12th August, 2019
    # Description: Middleware file to check user login
    # Copyright (c). All Rights Reserved.
*/

module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({
            error: 'You must log in to Add Credits.'
        });
    };
    next();
};