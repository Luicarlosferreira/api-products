const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OPTIONS = {
  origin: "http://localhost:5173",
};
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(OPTIONS));

const PORT = process.env.PORT || 3333;

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
