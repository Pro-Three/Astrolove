const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: false,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
  },
  signSun: {
    type: String,
    required: true,
    // instead of enum maybe validate for these values? --> enum: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
  },
  gender: {
    type: String,
    required: true,
    // enum: ["woman", "man", "non-binary", "transgender", "intersex", "Two Spirit", "gender non-conforming", "Other"]
  },
  desiredRelationshipPref: {
    type: String,
    required: false,
    // enum: ["woman", "man", "non-binary", "transgender", "intersex", "Two Spirit", "gender non-conforming", "Other"]
  },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {``
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;