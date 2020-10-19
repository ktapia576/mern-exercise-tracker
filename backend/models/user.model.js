const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // trim white space
    minlength: 3    // Has to be 3 chars long
  },
}, {
  timestamps: true, // Auto creates fields for when it was created or modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;