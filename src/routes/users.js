const { Router } = require("express");
const router = Router();
const userController = require("../controllers/users");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

module.exports = router;
