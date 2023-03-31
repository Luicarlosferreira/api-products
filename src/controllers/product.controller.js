const {
  createProduct,
  getAll,
  getUnique,
  deleteAll,
  deleteUnique,
} = require("../repositories/product.repository");

exports.create = async (req, res) => {
  try {
    const products = await createProduct(req.body);
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
    const uniqueProduct = await getUnique(req.params.id);
    res.status(200).send(uniqueProduct);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.deleteAll = async (req, res) => {
  try {
    await deleteAll(req.params);
    res.status(200).send({ message: "All products deleted" });
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.deleUniqueById = async (req, res) => {
  try {
    await deleteUnique(req.body);
    res.status(200).send({ message: "product deleted" });
  } catch (error) {
    res.status(404).send(error);
  }
};
