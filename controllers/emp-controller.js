const Employee = require("../model/Employee.js");

module.exports.getAllEmployee = async (req, res) => {
    let employees;
    try {
        employees = await Employee.find(); //Retrieving all employees from database
    } catch (err) {
        console.log(err);
    }
    if (!employees) { //Checking database, it has employee data or not
        return res.status(404).json({ message: "Employee Not Found" });
    }
    return res.status(200).json({ employees });
};

module.exports.addEmployee = async (req, res) => {
    const { EmployeeId, EmployeeName, Department, Salary } = req.body; 

    let existingEmployee; //Checking for already existing employee by name
    try {
        existingEmployee = await Employee.findOne({ EmployeeName }); //Checking employee name
    } catch (err) {
        return console.log(err);
    }

    if (existingEmployee) {
        return res.status(400).json({ message: "Employee already exists" });
    }

    const employee = new Employee({
        EmployeeId,
        EmployeeName,
        Department,
        Salary,
    });

    try {
        await employee.save(); //Storing new data to the database
    } catch (err) {
        return console.log(err);
    }

    return res.status(200).json({ employee });
}