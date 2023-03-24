const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");

const cors = require("cors");

exports.productsRoute = (app) => {
  app.post("/products", cors(), create);

  app.get("/products/all", get);

  app.get("/products/product", getUniqueById);

  app.get("/", (req, res) => {
    res.send("hello world");
  });
};
