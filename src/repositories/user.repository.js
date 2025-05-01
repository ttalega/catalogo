const User = require('../models/user.model.js');

class UserRepository {

    async findByEmail(email) {
        return User.findOne({ email });
    }
}

module.exports = new UserRepository();