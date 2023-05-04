const listService = require('../services/listService');

const getAll = async (_req, res) => {
  const products = await listService.getAll();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productsId = await listService.getProductById(id);
  if (!productsId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsId);
};

module.exports = {
  getAll,
  getProductById,
};