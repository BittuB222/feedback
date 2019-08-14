/*
    # Author: Bharat Gupta
    # Date: 13th August, 2019
    # Description: Recipient model class
    # Copyright (c). All Rights Reserved.
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: {
        type: String
    },
    responded: {
        type: Boolean,
        default: false
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = recipientSchema;