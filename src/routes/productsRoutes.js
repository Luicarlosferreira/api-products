const {
  create,
  get,
  getUniqueById,
} = require("../controllers/product.controller");

exports.productsRoute = (app) => {
  app.post("/products", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH,DELETE");
    res.header("Access-Control-Allow-Credentials", "true");

    create();
  });

  app.get("/products/all", get);

  app.get("/products/product", getUniqueById);

  app.get("/", (req, res) => {
    res.send("hello world");
  });
};
