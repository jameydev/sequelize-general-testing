const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const connectDB = async (
    dbUri = process.env.MDB_URI, 
    dbDialect = { 
        dialect: 'mariadb' 
    }) => {
    const sequelize = new Sequelize(dbUri, dbDialect);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.'.green);
    } catch (err) {
        console.error(`Unable to connect to the database: ${err}`.red);
    }
};

module.exports = connectDB;