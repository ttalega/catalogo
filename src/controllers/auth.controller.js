const User = require("../repositories/user.repository.js")
const bcrypt = require('bcrypt');


exports.showLogin = (req, res) => {
    res.render('login');
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findByEmail(email);
    if (!user) return res.status(401).render('login', { error: 'Usuario no encontrado' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).render('login', { error: 'Contraseña incorrecta' });

    req.session.user = { id: user._id, email: user.email };
    res.redirect('/admin');
};

exports.logout = (req, res) => {
    req.session.destroy(() => res.redirect('/'));
};