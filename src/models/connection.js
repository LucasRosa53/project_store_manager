const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: 'StoreManager',
});

module.exports = connection;