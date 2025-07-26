// controllers/employeeController.js
import Employee from '../models/Employee.js';

export const createEmployee = async (req, res) => {
    try {
        const { name, email } = req.body;
        const employee = await Employee.create({ name, email });
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);
        if (!employee) return res.status(404).json({ error: 'Employee not found' });
        await employee.update(req.body);
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


