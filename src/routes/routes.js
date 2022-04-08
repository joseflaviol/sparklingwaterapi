const express = require("express");

const customerRoutes = require("./customers_routes");
const userRoutes = require("./user_routes");

const router = express.Router();

router.use("/customer", customerRoutes);
router.use("/user", userRoutes);

module.exports = router;