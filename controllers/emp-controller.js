const Employee = require("../model/Employee.js");

module.exports.getAllEmployee = async (req, res, next) => {
    let employees;
    try {
        employees = await Employee.find();
    } catch (err) {
        console.log(err);
    }
    if (!employees) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ employees });
};

module.exports.addEmployee = async (req, res) => {
    const { EmployeeId, EmpName, Department, Salary } = req.body;

    let existingEmployee;
    try {
        existingEmployee = await Employee.find(EmployeeId);
    } catch (err) {
        return console.log(err);
    }

    if (existingEmployee) {
        return res.status(400).json({ message: "Employee already exists" });
    }

    const employee = new Employee({
        EmployeeId,
        EmpName,
        Department,
        Salary,
    });

    try {
        await employee.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(200).json({ employee });
}