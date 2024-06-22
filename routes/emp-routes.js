const express = require("express");
const { getAllEmployee, addEmployee } = require("../controllers/emp-controller.js");

const router = express.Router();

router.get("/list", getAllEmployee);
router.post("/add", addEmployee);

module.exports = router;