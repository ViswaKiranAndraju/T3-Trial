// models/Employee.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Employee = sequelize.define('Employee', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, defaultValue: 'active' }
    //isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Employee;
