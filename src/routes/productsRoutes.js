const {
  create,
  get,
  getUniqueById,
  deleUniqueById,
  deleteAll,
} = require("../controllers/product.controller");

exports.productsRoute = (app) => {
  app.post("/products", create);
  app.get("/products", get);
  app.get("/products/:id", getUniqueById);
  app.delete("/products", deleteAll);
  app.delete("/products:id", deleUniqueById);
};
