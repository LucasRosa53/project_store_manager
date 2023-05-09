const productsModels = require('../models/productsModels');

const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getProductById = async (id) => {
  const productsId = await productsModels.getProductById(id);
  return productsId;
};

const productRegister = async (name) => {
  const newProductRegister = await productsModels.productRegister(name);
  return newProductRegister;
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
};