const express = require("express");
const { getAllEmployee, addEmployee } = require("../controllers/emp-controller.js");

const router = express.Router();

router.get("/", getAllEmployee);
router.get("/add", addEmployee);

module.exports = router;