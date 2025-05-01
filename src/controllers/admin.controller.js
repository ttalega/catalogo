const Product = require('../repositories/product.repository.js');

exports.showForm = (req, res) => {
    res.render('products/admin');
};

exports.listAdmin = async (req, res) => {
    try {
        const category = req.query.category;
        const filter = category ? { category: category } : {};

        const products = await Product.getFiltered(filter);
        const categories = await Product.getCategories();

        res.render('products/admin', {
            products,
            categories,
            category
        });

    } catch (error) {
        console.error('Error al listar productos:', error);
        res.status(500).send('Error al cargar productos');
    }
};

exports.createProduct = async (req, res) => {
    await Product.create(req.body);
    res.redirect('/admin');
};

exports.updateProduct = async (req, res) => {
    await Product.update(req.params.id, req.body);
    res.redirect('/admin');
};

exports.deleteProduct = async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin');
};