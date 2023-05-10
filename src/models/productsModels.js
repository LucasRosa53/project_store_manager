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

const updateProduct = async (name, id) => {
  const [{ affectedRows }] = await connection
    .execute(`UPDATE StoreManager.products
SET name = (?) WHERE id = (?)`, [name, id]);
  return affectedRows;
};

const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection
    .execute(`DELETE FROM StoreManager.products
WHERE id = (?)`, [id]);
  return affectedRows;
};

module.exports = {
  getAll,
  getProductById,
  productRegister,
  updateProduct,
  deleteProduct,
};