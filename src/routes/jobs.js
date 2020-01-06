const { Router } = require("express");
const router = Router();
const jobsController = require("../controllers/jobs");

router.get("/", jobsController.getJobList);
router.post("/", jobsController.createJob);

module.exports = router;
