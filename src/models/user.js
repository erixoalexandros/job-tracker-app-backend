const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  }
});

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY);
};

const User = model("User", userSchema);

module.exports = User;
