/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: Mongoose model class for Users.
    # Copyright (c). All Rights Reserved.
*/

const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.schema;

const userSchema = new Schema({

    googleId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    profile_img: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verified_email: {
        type: Boolean,
        required: true
    },
    provider: {
        type: String,
        required: true
    }
});

mongoose.model('users', userSchema);
