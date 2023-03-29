const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");

exports.productsRoute = (app) => {
  app.post("/products", create);
  app.get("/products", get);
  app.get("/products/unique", getUniqueById);
  app.get("/", (req, res) => {
    res.send("hello world");
  });
  app.post("/teste", (req, res) => {
    const { name, color } = req.params;

    res.send({
      name,
      color,
    });
  });
};
