// models/Project.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Project = sequelize.define('Project', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT }
});

export default Project;
