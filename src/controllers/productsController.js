const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  // console.log('service products', products);
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productsId = await productsService.getProductById(id);
  if (!productsId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsId);
};

const productRegister = async (req, res) => {
  const name = req.body;
  const newProductRegister = await productsService.productRegister(name);
  return res.status(201).json(newProductRegister);
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
};