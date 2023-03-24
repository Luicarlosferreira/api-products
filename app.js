const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
const BASE = process.env.BASE_URL;
const PORT = process.env.PORT;

// const options = {
//   credentials: true,
//   origin: ["*"],
//   methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
// };

// app.use(cors(options));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
