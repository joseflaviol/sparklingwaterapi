const { DataTypes } = require("sequelize");
const database = require("../config/database");

const User = database.connection.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;