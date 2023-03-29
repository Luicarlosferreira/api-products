const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");

exports.productsRoute = (app) => {
  app.post("/products", create);
  app.get("/products", get);
  app.get("/products/unique", getUniqueById);
};
