import { Module } from 'module';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Define User schema
var User = new Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});
module.exports = User;