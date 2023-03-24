const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

// const options = {
//   credentials: true,
//   origin: true,
//   methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
// };

app.use(cors());

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
