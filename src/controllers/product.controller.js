const Product = require('../repositories/product.repository.js');

exports.list = async (req, res) => {
  try {
    const category = req.query.category;
    const filter = category ? { category: category } : {};

    const products = await Product.getFiltered(filter);
    const categories = await Product.getCategories();

    res.render('products/products', {
      products,
      categories,
      category
    });

  } catch (error) {
    console.error('Error al listar productos:', error);
    res.status(500).send('Error al cargar productos');
  }
};
