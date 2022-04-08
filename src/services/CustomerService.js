const Customer = require("../models/Customer");

const CustomerService = {
    getAllCustomers: async function() {
        return await Customer.findAll();
    },
    findCustomer: async function(id) {
        return await Customer.findByPk(id);
    },
    insertCustomer: async function(customer) {
        return await Customer.create(customer);;
    },
    updateCustomer: async function(id, body) {
        return await Customer.update(body, {
            where: { id }
        });
    },
    deleteCustomer: async function(id) {
        return await Customer.destroy({
            where: { id }
        }); 
    }
};

module.exports = CustomerService;