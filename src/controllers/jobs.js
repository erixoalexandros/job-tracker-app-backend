const Job = require("../models/job");
const jobsController = {};

jobsController.getJobList = (req, res) => {
  res.send("job list");
};

jobsController.getJob = (req, res) => {
  res.send("job selected");
};

jobsController.createJob = async (req, res) => {
  const {
    user,
    company,
    position,
    salary,
    salaryRate,
    location,
    contactName,
    contact,
    description,
    status,
    notes
  } = req.body;

  const newJob = new Job({
    user,
    company,
    position,
    salary,
    salaryRate,
    location,
    contactName,
    contact,
    description,
    status,
    notes
  });

  try {
    await newJob.save();
  } catch (error) {
    res.status(400).send(error.message);
  }
  res.send("Job Created");
};

jobsController.updateJob = (req, res) => {
  res.send("job updated");
};

jobsController.deleteJob = (req, res) => {
  res.send("job deleted");
};

module.exports = jobsController;
