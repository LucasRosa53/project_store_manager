const listService = require('../models/listProduct');

const getAll = async () => {
  const products = await listService.getAll();
  return products;
};

const getProductById = async (id) => {
  const productsId = await listService.getProductById(id);
  return productsId;
};

module.exports = {
  getAll,
  getProductById,
};