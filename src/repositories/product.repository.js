const { prisma } = require("../services/prisma");

exports.createProduct = async (data) => {
  const products = await prisma.products.create({
    data,
  });

  return products;
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

exports.deleteUnique = async (id) => {
  await prisma.products.delete({
    where: {
      id,
    },
  });
};

exports.deleteAll = async () => {
  await prisma.products.deleteMany({});
};
