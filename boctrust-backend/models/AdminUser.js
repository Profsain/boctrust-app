const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  photo: {
    type: String,
    default: 'https://shorturl.at/msvz7',
  },        // URL or file path to user's photo

  fullName: String,         // Full name of the user

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phone: String,        // Phone number of the user
  username: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  jobRole: String,      // User's job role

  userType: {
    type: String,
    enum: ['user', 'admin', 'md', 'coo', 'credit_analyst', 'credit_head', 'operation', 'loan_officer'], // Possible roles
    default: 'user',
  },

  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  token: String,        // User's token
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
