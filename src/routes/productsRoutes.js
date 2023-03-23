const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");
const cors = require("cors");

const corsOptions = {
  origin: `${process.env.BASE_URL}/products`,
  optionsSucessStatus: 200,
};

exports.productsRoute = (app) => {
  app.post("/products", cors(corsOptions), create);

  app.get("/products/all", get);

  app.get("/products/product", getUniqueById);

  app.get("/", (req, res) => {
    res.send("hello world");
  });
};
