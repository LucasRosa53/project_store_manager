const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection
    .execute(`SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s ON sp.sale_id = s.id
ORDER BY s.id, sp.product_id`);
  return sales;
};

const getSalesById = async (id) => {
  const [salesId] = await connection
    .execute(`SELECT s.date, sp.product_id AS productId, sp.quantity
FROM StoreManager.sales_products AS sp 
JOIN StoreManager.sales AS s ON sp.sale_id = s.id
WHERE s.id = (?) ORDER BY sp.product_id`, [id]);
  return [salesId];
};

module.exports = {
  getAllSales,
  getSalesById,
};