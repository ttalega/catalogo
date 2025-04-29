const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.routes.js');
const adminRoutes = require('./routes/admin.routes.js');
const connectDB = require('./config/database.js');
const path = require('path'); // <- esta línea es importante
require('dotenv').config();

const app = express();

// Conexión a la BD
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Servir archivos estáticos desde /src/public
app.use(express.static(path.join(__dirname, 'public')));

// Motor de plantillas
app.engine('handlebars', exphbs.engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    helpers: {
        eq: (a, b) => a === b
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Rutas
app.use('/', productRoutes);
app.use('/', adminRoutes);

module.exports = app;