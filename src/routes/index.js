const { productsRoute } = require("./productsRoutes");

module.exports = (app) => {
  productsRoute(app);
  
};
