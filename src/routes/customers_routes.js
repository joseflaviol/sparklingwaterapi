const express = require("express");

const CustomerController = require("../controllers/CustomerController");

const router = express.Router();

router.get("/", CustomerController.getAllCustomers);
router.get("/:id", CustomerController.getCustomer);
router.post("/", CustomerController.createCustomer);
router.put("/:id", CustomerController.updateCustomer);
router.delete("/:id", CustomerController.removeCustomer);

module.exports = router;