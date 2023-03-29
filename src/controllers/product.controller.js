const {
  createProduct,
  getAll,
  getUnique,
} = require("../repositories/product.repository");

exports.create = async (req, res) => {
  const { name, color, size } = req.body;
  try {
    const products = await createProduct(name, color, size);
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.get = async (req, res) => {
  try {
    const products = await getAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getUniqueById = async (req, res) => {
  try {
    const uniqueProduct = await getUnique(req.body);
    res.status(200).send(uniqueProduct);
  } catch (error) {
    res.status(404).send(error);
  }
};
