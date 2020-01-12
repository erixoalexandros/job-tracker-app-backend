const Job = require("../models/job");
const { filterTrueProperties } = require("../helpers");

module.exports = {
  ///////////////////////////////////////////////////////////////////
  // GET JOB LIST ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async getJobsList(req, res) {
    const jobs = await Job.find({ user: req.userId })
      .select("-user -__v")
      .sort({ postedDate: -1 });

    try {
      res.json(jobs);
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  },

  ///////////////////////////////////////////////////////////////////
  // GET SINGLE JOB /////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async getJob(req, res) {
    try {
      const job = await Job.findById(req.params.id);
      res.json(job);
    } catch (error) {
      res.status(404).json({ message: "Job not found" });
    }
  },

  ///////////////////////////////////////////////////////////////////
  // CREATE JOB /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async createJob(req, res) {
    const newJob = new Job({ ...filterTrueProperties(req.body) });

    try {
      res.json(await newJob.save());
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  },

  ///////////////////////////////////////////////////////////////////
  // UPDATE JOB /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async updateJob(req, res) {
    try {
      const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...filterTrueProperties(req.body) }
        },
        {
          new: true
        }
      );
      res.json(updatedJob);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  ///////////////////////////////////////////////////////////////////
  // DELETE JOB /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async deleteJob(req, res) {
    try {
      await Job.findByIdAndDelete(req.params.id);
      res.json({
        message: "Job deleted"
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
