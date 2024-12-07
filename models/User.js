const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }, // For production, hash passwords
  loginTime: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;