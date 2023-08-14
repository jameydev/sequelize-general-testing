const { 
    Sequelize, 
    DataTypes, 
    Model 
} = require('sequelize');
const connectDB = require('../config/db');
const dotenv = require('dotenv').config();

class User extends Model {};

(async () => {
    const sequelize = await connectDB();
    User.init({
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userRole: {
            type: DataTypes.STRING,
            defaultValue: 'user',
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'User'
    });
})();

module.exports = { User };