/*
    # Author: Bharat Gupta
    # Date: 13th August, 2019
    # Description: Survey model class
    # Copyright (c). All Rights Reserved.
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    date_created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    recipients: {
        type: [RecipientSchema]
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dateSent: {
        type: Date,
    },
    lastResponded: {
        type: Date
    }
});

mongoose.model('surveys', surveySchema);