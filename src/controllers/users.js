const User = require("../models/user");
const bcrypt = require("bcrypt");
const usersController = {};

///////////////////////////////////////////////////////////////////
// USER LOGIN /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

usersController.loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    res.status(404).send("User not found");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.json({ auth: true, token: user.generateToken() });
    } else {
      res.status(401).send("Not allowed");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

///////////////////////////////////////////////////////////////////
// USER REGISTER //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

usersController.registerUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword
  });

  try {
    await user.save();
  } catch (error) {
    res.status(500).send(error.message);
  }

  res.json({ auth: true, token: user.generateToken() });
};

module.exports = usersController;
