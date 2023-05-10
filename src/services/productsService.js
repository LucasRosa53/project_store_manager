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

const updateProduct = async (name, id) => {
  const affectedRows = await productsModels.updateProduct(name, id);
  return affectedRows;
};

const deleteProduct = async (id) => {
  const affectedRows = await productsModels.deleteProduct(id);
  return affectedRows;
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
  updateProduct,
  deleteProduct,
};