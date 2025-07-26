// models/Task.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Project from './Project.js';

const Task = sequelize.define('Task', {
    name: { type: DataTypes.STRING, allowNull: false }
});

// Relation: Each task belongs to a project
Task.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(Task, { foreignKey: 'projectId' });

export default Task;
