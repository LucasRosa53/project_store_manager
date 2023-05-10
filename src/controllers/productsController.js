const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const affectedRows = await productsService.updateProduct(name, id);
  if (affectedRows === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ 
    id,
    name,
   });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const affectedRows = await productsService.deleteProduct(id);
  if (affectedRows === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).json();
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
  updateProduct,
  deleteProduct,
};