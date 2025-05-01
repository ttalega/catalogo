const express = require('express');
const exphbs = require('express-handlebars');
const hbsHelpers = require('./helpers/handlebars');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.routes.js');
const adminRoutes = require('./routes/admin.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const userRoutes = require('./routes/user.routes.js')
const connectDB = require('./config/database.js');
const path = require('path'); // <- esta línea es importante
const session = require('./config/session.js');
require('dotenv').config();
const { requireAuth } = require('./middlewares/auth.middleware.js')

const app = express();

// Conexión a la BD
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Servir archivos estáticos desde /src/public
app.use(express.static(path.join(__dirname, 'public')));

app.use(session);

// Motor de plantillas
app.engine('handlebars', exphbs.engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    helpers: hbsHelpers
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Rutas
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use('/', productRoutes);
app.use('/admin', requireAuth, adminRoutes);
app.use('/', authRoutes);
app.use('/profile', requireAuth, userRoutes)

module.exports = app;