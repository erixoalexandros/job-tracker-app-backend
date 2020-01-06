require("dotenv").config();
const app = require("./server");
const port = process.env.PORT || "4000";
require("./database");

const main = async () => {
  await app.listen(port);
  console.log(`Server initialized on port ${port}`);
};

main();
