const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

const getSalesById = async (id) => {
  const salesById = await salesModel.getSalesById(id);
  return salesById;
};

module.exports = {
  getAllSales,
  getSalesById,
};