const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: Number, required: true },
  offer: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('products', productoSchema);
