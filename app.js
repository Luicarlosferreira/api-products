const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const BASE_URL = process.env.BASE_URL;

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: `${BASE_URL}`,
    headers: {
      "Access-Control-Allow-Origin": "https://slug-panel.onrender.com",
      "Access-Control-Allow-Credentials": true,
    },
  })
);

const PORT = process.env.PORT;

require("./src/routes/index")(app);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
