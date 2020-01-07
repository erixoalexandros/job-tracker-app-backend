const mongoose = require("mongoose");

const Job = mongoose.model("Job", {
  user: {
    type: String,
    required: true
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  position: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  salary: {
    type: Number
  },
  salaryRate: String,
  location: String,
  contactName: String,
  contact: {
    type: [String],
    minlength: 6,
    maxlength: 255
  },
  description: String,
  status: {
    type: String,
    required: true
  },
  notes: String
});

module.exports = Job;
