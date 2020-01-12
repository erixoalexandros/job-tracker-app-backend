const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  ///////////////////////////////////////////////////////////////////
  // USER LOGIN /////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async loginUser(req, res) {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({
        message: "Username or password incorrect"
      });
    }

    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.json({
          authToken: user.generateAuthToken(),
          message: "Access granted"
        });
      } else {
        res.status(401).json({
          message: "Username or password incorrect"
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "The server encountered an unexpected error"
      });
    }
  },

  ///////////////////////////////////////////////////////////////////
  // USER REGISTRATION //////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  async registerUser(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({
        message: "Username or password not found"
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });

    try {
      await user.save();
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }

    res.json({
      token: user.generateAuthToken(),
      message: "User registered"
    });
  }
};
