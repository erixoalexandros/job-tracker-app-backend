const { Router } = require("express");
const router = Router();
const { loginUser, registerUser } = require("../controllers/users");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
