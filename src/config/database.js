const { Sequelize } = require("sequelize");

const database = {
    connection:new Sequelize("mysql://sql10484532:yEsniKdVW3@sql10.freemysqlhosting.net:3306/sql10484532"),
    newConnection: async function() {
        await this.closeConnection();
        this.connection = new Sequelize("mysql://sql10484532:yEsniKdVW3@sql10.freemysqlhosting.net:3306/sql10484532");
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
