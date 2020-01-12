require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || "4000";

// Run database connection from database.js module
require("./database");

const init = async () => {
  await app.listen(port);
  console.log(`Server initialized on port ${port}`);
};

init();
