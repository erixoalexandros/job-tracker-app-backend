const express = require("express");
const cors = require("cors");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/users", require("./routes/users"));

module.exports = app;
