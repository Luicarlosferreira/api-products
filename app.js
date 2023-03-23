const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});
const PORT = process.env.PORT || 8000;

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
