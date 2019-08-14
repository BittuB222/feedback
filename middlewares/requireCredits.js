/*
    # Author: Bharat Gupta
    # Date: 12th August, 2019
    # Description: Middleware file to check credits
    # Copyright (c). All Rights Reserved.
*/

module.exports = (req, res, next) => {
    if(req.user.emailCredits < 1) {
        return res.status(403).send({
            error: 'You do not have enough Credits!!'
        });
    };
    next();
};