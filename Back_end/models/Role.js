const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Role = sequelize.define(
    'Role',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'roles', // Explicitly specify the table name
        timestamps: true,  // To enable createdAt and updatedAt
    }
);

module.exports = Role;
