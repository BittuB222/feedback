/*
    # Author: Bharat Gupta
    # Date: 13th August, 2019
    # Description: Route handler for Survey
    # Copyright (c). All Rights Reserved.
*/

const mongoose = require('mongoose');

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
    app.post('/api/surveys/', requireLogin, requireCredits, (req, res) => {
        
        const { title, subject, body, recipients } = req.body;
        
        const survey = new Survey({
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(),
        });

        const mailer = new Mailer(Survey, surveyTemplate(survey));
        mailer.send();
    });
};