const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const BASE_URL = process.env.BASE_URL;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT;

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
