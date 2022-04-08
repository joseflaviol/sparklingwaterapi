const UserService = require("../services/UserService");

const UserController = {
    getAllUsers: async function(req, res) {
        return res.json(await UserService.getAllUser());
    },
    getUser: async function(req, res) {
        const { id } = req.params;
        try {
            return res.json(await UserService.findUser(id));
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    createUser: async function(req, res) {
        const user = { ...req.body };
        try {
            return res.json(await UserService.insertUser(user));
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    loginUser: async function(req, res) {
        const user = { ...req.body };
        try {
            const r = await UserService.login(user);
            let s = 200;
            if (r == null) {
                s = 400;
            }
            return res.status(s).json(r);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateUser: async function(req, res) {
        const { id } = req.params;
        const body = { ...req.body };
        try {
            return res.json(await UserService.updateUser(id, body));
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    removeUser: async function(req, res) {
        const { id } = req.params;
        try {
            return res.json(await UserService.deleteUser(id));
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
};

module.exports = UserController;
