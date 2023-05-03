const listService = require('../services/listService');

const getAll = async (req, res) => {
  const products = await listService.getAll();
  return res.status(200).json(products);
};

module.exports = {
  getAll,
};