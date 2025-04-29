const repo = require('../repositories/product.repository.js');

exports.list = async (req, res) => {
    try {
        const category = req.query.category;
        const filter = category ? { category: category } : {};

        const products = await repo.getFiltered(filter);
        const categories = await repo.getCategories();

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

exports.showForm = (req, res) => {
    res.render('products/admin');
};

exports.createProduct = async (req, res) => {
    await repo.create(req.body);
    res.redirect('/admin');
};

exports.updateProduct = async (req, res) => {
    await repo.update(req.params.id, req.body);
    res.redirect('/admin');
};

exports.deleteProduct = async (req, res) => {
    await repo.delete(req.params.id);
    res.redirect('/admin');
};