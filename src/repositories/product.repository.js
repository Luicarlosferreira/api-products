const { prisma } = require("../services/prisma");

exports.createProduct = async (data) => {
  const product = await prisma.products.create({
    data,
  });

  return product;
};

exports.getAll = async () => {
  const getProducts = await prisma.products.findMany({});

  return getProducts;
};

exports.getUnique = async (data) => {
  const getProduct = await prisma.products.findUnique({
    where: {
      id: data,
    },
  });
  return getProduct;
};
