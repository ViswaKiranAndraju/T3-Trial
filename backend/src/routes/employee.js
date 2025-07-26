// routes/employeeRoutes.js
import express from 'express';
import { createEmployee, getEmployees } from '../controllers/employeeController.js';
// import { createEmployee, getEmployees, updateEmployee } from '../controllers/employeeController.js';

const router = express.Router();
// router.put('/:id', updateEmployee);
router.post('/', createEmployee);
router.get('/', getEmployees);

export default router;
