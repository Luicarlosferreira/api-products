const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");

exports.productsRoute = (app) => {
  app.post("/create", create);

  app.get("/products/all", get);

  app.get("/products/product", getUniqueById);

  app.get("/", (req, res) => {
    res.send("hello world");
  });
};
