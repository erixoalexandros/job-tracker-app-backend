const { Router } = require("express");
const router = Router();
const jobsController = require("../controllers/jobs");

router.get("/", jobsController.getJobList);
router.get("/:id", jobsController.getJob);
router.post("/", jobsController.createJob);
router.put("/:id", jobsController.updateJob);
router.delete("/:id", jobsController.deleteJob);

module.exports = router;
