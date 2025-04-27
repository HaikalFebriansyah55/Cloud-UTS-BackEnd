const db = require('../config/db');

// CREATE product
async function createProduct(name, price, imageUrl) {
  const [result] = await db.query(
    'INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)',
    [name, price, imageUrl]
  );
  return result.insertId;
}

// READ all products
async function getAllProducts() {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
}

// DELETE product by ID
async function deleteProduct(id) {
  const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
  return result.affectedRows; // returns 1 if deleted
}

module.exports = { createProduct, getAllProducts, deleteProduct };
