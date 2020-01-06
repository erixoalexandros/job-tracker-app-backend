const jobsController = {};

jobsController.getJobList = (req, res) => {
  res.send("job list");
};

jobsController.createJob = (req, res) => {
  res.send("job created");
};

module.exports = jobsController;
