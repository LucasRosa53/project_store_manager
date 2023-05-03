const listService = require('../models/listProduct');

const getAll = async () => {
  const products = await listService.getAll();
  return products;
};

module.exports = {
  getAll,
};