const User = require('../models/user.model.js');

class UserRepository {

    async findByEmail(email) {
        return User.findOne({ email });
    }

    async updateUser(email, data) {
        const user = await this.findByEmail(email)
        return await Product.findByIdAndUpdate(user.id, data, { new: true });
    }
}

module.exports = new UserRepository();