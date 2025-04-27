const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Konfigurasi CORS
app.use(cors({
  origin: 'http://54.253.189.2', // Ganti dengan URL frontend kamu (bisa `*` untuk semua origin)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Sesuaikan dengan metode yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'], // Tambahkan headers yang dibutuhkan
}));
// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Error handling
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
