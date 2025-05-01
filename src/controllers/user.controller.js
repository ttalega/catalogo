const userService = require('../services/user.service.js');

exports.updateUser = async (req, res) => {
    try {
        const userId = req.session.user.id; // ID desde sesión
        await userService.update(userId, req.body);
        res.redirect('/profile'); // o donde quieras
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el perfil');
    }
};