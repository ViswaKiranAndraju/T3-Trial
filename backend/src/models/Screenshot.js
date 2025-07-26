// models/Screenshot.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Employee from './Employee.js';

const Screenshot = sequelize.define('Screenshot', {
    imageUrl: { type: DataTypes.STRING, allowNull: false },
    permissionGranted: { type: DataTypes.BOOLEAN, defaultValue: true }
});

// Relation: Each screenshot belongs to an employee
Screenshot.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Screenshot;
