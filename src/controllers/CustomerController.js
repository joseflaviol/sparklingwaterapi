const CustomerService = require("../services/CustomerService");

const CustomerController = {
    getAllCustomers: async function(req, res) {
        return res.json(await CustomerService.getAllCustomers());
    },
    getCustomer: async function(req, res) {
        const { id } = req.params;
        try {
            const r = await CustomerService.findCustomer(id);
            let s = 200;
            if (r == null) {
                s = 404;
            }
            return res.status(s).json(r);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    createCustomer: async function(req, res) {
        const customer = { ...req.body };
        try {
            return res.json(await CustomerService.insertCustomer(customer));
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateCustomer: async function(req, res) {
        const { id } = req.params;
        const body = { ...req.body };
        try {
            return res.json(await CustomerService.updateCustomer(id, body));
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    removeCustomer: async function(req, res) {
        const { id } = req.params;
        try {
            return res.json(await CustomerService.deleteCustomer(id));
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};

module.exports = CustomerController;
