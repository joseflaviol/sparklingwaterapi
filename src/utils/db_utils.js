const Customer = require("../models/Customer");
const User = require("../models/User");

const utils = {
    sync: async function() {
       await Customer.sync({ force: true }); 
       await User.sync({ force: true }); 
    }
}

module.exports = utils;