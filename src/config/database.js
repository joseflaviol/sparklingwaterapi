const { Sequelize } = require("sequelize");

const database = {
    connection: new Sequelize({
        dialect: "sqlite",
        storage: "db.sqlite"
    }),
    newConnection: async function() {
        await this.closeConnection();
        this.connection = new Sequelize({
            dialect: "sqlite",
            storage: "db.sqlite"
        });
    },
    closeConnection: async function() {
        if (this.connection != null) {
            await this.connection.close();
            this.connection = null;
        }
    },
    testConnection: async function() {
        try {
                await this.connection.authenticate();
                console.log('Connection has been established successfully.');
            } catch (error) {
                console.error('Unable to connect to the database:', error);
        }
    }
};

module.exports = database;
