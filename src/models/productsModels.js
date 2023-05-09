const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const getProductById = async (id) => {
  const [[productsId]] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = (?)', [id]);
  return productsId;
};

const productRegister = async ({ name }) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return {
    id: insertId,
    name,
  };
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
};