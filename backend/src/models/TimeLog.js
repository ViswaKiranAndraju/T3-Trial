// models/TimeLog.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Task from './Task.js';
import Project from './Project.js';
import Employee from './Employee.js';

const TimeLog = sequelize.define('TimeLog', {
    startTime: { type: DataTypes.DATE, allowNull: false },
    endTime: { type: DataTypes.DATE, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false } // in minutes
});

// Relations
TimeLog.belongsTo(Employee, { foreignKey: 'employeeId' });
TimeLog.belongsTo(Project, { foreignKey: 'projectId' });
TimeLog.belongsTo(Task, { foreignKey: 'taskId' });

export default TimeLog;
