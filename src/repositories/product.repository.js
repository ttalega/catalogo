const Product = require('../models/product.model.js');

class ProductRepository {
  async getAll() {
    return await Product.find().lean();
  }

  async getFiltered(filter) {
    return await Product.find(filter).lean();
  }

  async getCategories() {
    return await Product.distinct('category');
  }

  async create(data) {
    const product = new Product(data);
    return await product.save();
  }

  async getById(id) {
    return await Product.findById(id);
  }

  async update(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();
