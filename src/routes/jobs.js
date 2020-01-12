const { Router } = require("express");
const router = Router();
const {
  getJobsList,
  getJob,
  createJob,
  updateJob,
  deleteJob
} = require("../controllers/jobs");
const checkAuthToken = require("../middlewares/checkAuthToken");

router.get("/", checkAuthToken, getJobsList);
router.get("/:id", checkAuthToken, getJob);
router.post("/", checkAuthToken, createJob);
router.put("/:id", checkAuthToken, updateJob);
router.delete("/:id", checkAuthToken, deleteJob);

module.exports = router;
