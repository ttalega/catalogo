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
    res.redirect('/admin?created=1'); //ruta para alerta de producto creado
};

exports.updateProduct = async (req, res) => {
    await Product.update(req.params.id, req.body);
    res.redirect('/admin');
};

exports.deleteProduct = async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin?deleted=1'); //ruta para alerta de producto eliminado
};

exports.updateAll = async (req, res) => {
    const { products } = req.body;

    try {
        for (const product of products) {
            await Product.update(product._id, {
                name: product.name,
                category: product.category,
                description: product.description,
                image: product.image,
                price: parseFloat(product.price),
                offer: parseFloat(product.offer),
                stock: parseInt(product.stock)
            });
        }

        res.redirect('/admin?updated=1'); //ruta para alerta de productos actualizados
    } catch (error) {
        console.error('Error al actualizar productos:', error);
        res.status(500).send('Error al actualizar productos');
    }
};
