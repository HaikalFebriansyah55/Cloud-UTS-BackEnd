const db = require('../config/db');

async function createProduct(name, price, imageUrl) {
  const [result] = await db.query('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)', [name, price, imageUrl]);
  return result.insertId;
}

async function getAllProducts() {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
}

module.exports = { createProduct, getAllProducts };
