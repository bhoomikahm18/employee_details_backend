const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    EmployeeId: {
        type: Number,
        required: true,
        unique: true,
    },
    EmployeeName: {
        type: String,
        required: true,
        unique: true,
    },
    Department: {
        type: String,
        required: true,
    },
    Salary: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Employee", employeeSchema);