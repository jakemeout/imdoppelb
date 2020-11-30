'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
  username: {
    type: String,
    required: 'Please enter a valid username.'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);