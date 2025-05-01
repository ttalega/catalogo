const User = require('../models/user.model.js'); // Asegúrate de tener este modelo
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.redirect('/login');
    }

    req.session.user = user;  // Guardar el usuario en la sesión
    res.redirect('/admin');
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/');
    });
};
