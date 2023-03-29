const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT || 3333;

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
