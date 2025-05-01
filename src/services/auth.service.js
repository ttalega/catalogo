const bcrypt = require('bcrypt');
const userRepo = require('../repositories/user.repository.js');

module.exports = {
    async login(email, password) {
        const user = await userRepo.findByEmail(email);
        if (!user) return null;

        const match = await bcrypt.compare(password, user.password);
        return match ? user : null;
    }
};
