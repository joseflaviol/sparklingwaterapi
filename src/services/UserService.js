const User = require("../models/User");

const UserService = {
    getAllUser: async function() {
        return await User.findAll();
    },
    findUser: async function(id) {
        return await User.findByPk(id);
    },
    insertUser: async function(user) {
        return await User.create(user);
    },
    login: async function(user) {
        return await User.findOne({
            where: {
                username: user.username,
                password: user.password
            }
        });
    },
    updateUser: async function(id, body) {
        return await User.update(body, {
            where: { id }
        });
    },
    deleteUser: async function(id) {
        return await User.destroy({
            where: { id }
        });
    }
};

module.exports = UserService;
