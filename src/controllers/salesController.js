const salesService = require('../services/salesServices');

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();
  if (!sales) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const [salesId] = await salesService.getSalesById(id);
  if (salesId.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(salesId);
};

module.exports = {
  getAllSales,
  getSalesById,
};
