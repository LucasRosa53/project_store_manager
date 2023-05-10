const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

const getSalesById = async (id) => {
  const salesById = await salesModel.getSalesById(id);
  return salesById;
};

// A ordem dos parâmetros da seguinte função importa a ordem!!

module.exports = {
  getAllSales,
  getSalesById,
};